const express = require('express');
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(404).json({ Nome: "AULAWEBII"});
});

module.exports = router;