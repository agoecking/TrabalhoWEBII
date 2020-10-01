const express = require('express');
const router = express.Router();
const userSchema = require("../models/UserSchema")

router.get("/", (req, res, next) => {
    res.status(404).json({ Nome: "AULAWEBII"});
});

router.post("/", (req, res, next) => {
    var result = userSchema.create(req.body);
    res.status(201).json(result);
});

module.exports = router;