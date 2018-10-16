const express = require("express");
const router = express.Router();

const { Customer, validate } = require("../models/customer");

router.get("/", async (req, res) => {
  const customers = await Customer.find().sort("name");
  res.send(customers);
});

router.get("/:id", async (req, res) => {
  const customer = await Customer.findById(req.params.id);

  if (!customer)
    return res.status(404).send("No customer found matching this ID");

  res.send(customer);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  let customer = new Customer({
    name: req.body.name,
    isGold: req.body.idGold,
    phone: req.body.phone
  });
  customer = await customer.save();

  res.send(customer);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const payload = {
    name: req.body.name,
    isGold: req.body.isGold,
    phone: req.body.phone
  };

  const customer = await Customer.findByIdAndUpdate(req.params.id, payload, {
    new: true
  });

  if (!customer)
    return res.status(404).send("No customer found matching this ID");

  res.send(customer);
});

router.delete("/:id", async (req, res) => {
  const customer = await Customer.findByIdAndRemove(req.params.id);

  if (!customer)
    return res.status(404).send("No customer found matching this ID");

  res.send(customer);
});

module.exports = router;
