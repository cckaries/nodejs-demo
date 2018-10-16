const winston = require("winston");
const mongoose = require("mongoose");

module.exports = function() {
  (async () => {
    await mongoose.connect(
      "mongodb://localhost/nr",
      { useNewUrlParser: true, useFindAndModify: false, 'useCreateIndex': true }
    );
    winston.info("Connected to MongoDB.");
  })();
};
