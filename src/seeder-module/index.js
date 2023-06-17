const { connectToDatabase } = require('../config-module');
const bookSeeder = require('./book.seeds');
require('dotenv').config();

const seedAll = async () => {
  try {
    await destroyAll();
    await bookSeeder.seed();
    console.log('book seeded');
  } catch (error) {
    console.log(error);
  }
};

const destroyAll = async () => {
  await bookSeeder.destroy();
  console.log('book destroied');
};

const db_uri = process.env.DB_URI;
connectToDatabase(db_uri).then((conn) => {
  console.log(`database ${conn.connection.name} connected`);
  if (process.argv[2] === '-s') seedAll();

  if (process.argv[2] === '-d') destroyAll();
});
