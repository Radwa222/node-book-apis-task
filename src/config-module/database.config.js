const mongoose = require('mongoose');

module.exports = async (connection) => {
  return await mongoose.connect(connection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};
