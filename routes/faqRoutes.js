const express = require("express");

const router = express.Router();

const { handleProcess, healthCheck } = require("../controllers/faqController");

// POST API (Main)
router.post("/process", handleProcess);

// GET API (BONUS)

router.get("/health", healthCheck);

module.exports = router;