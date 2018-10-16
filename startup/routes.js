const express = require('express');

const genresRoute = require("../routes/genres");
const customersRoute = require("../routes/customers");
const moviesRoute = require("../routes/movies");
const rentalsRoute = require("../routes/rentals");
const usersRoute = require("../routes/users");
const authRoute = require("../routes/auth");
const error = require("../middleware/error");

module.exports = function(app) {
  app.use(express.json());
  app.use("/api/genres", genresRoute);
  app.use("/api/customers", customersRoute);
  app.use("/api/movies", moviesRoute);
  app.use("/api/rentals", rentalsRoute);
  app.use("/api/users", usersRoute);
  app.use("/api/auth", authRoute);
  app.use(error);
};
