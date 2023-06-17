const { app, bootstrap } = require('./src/app-module');
const { connectToDatabase } = require('./src/config-module');

require('dotenv').config();

const port = process.env.PORT || 8000;
const db_uri = process.env.DB_URI;

connectToDatabase(db_uri).then((conn) =>
  console.log(`database ${conn.connection.name} connected`)
);

const mode = process.env.NODE_ENV;
const server = bootstrap(app, port, mode);
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Error ${err.name}`);
  console.error(err.stack);
  server.close(() => {
    console.error(`process is shutting down`);
    process.exit(1);
  });
});
