const express = require("express");
const router = express.Router();
const verifyToken = require("../validation/verifyToken");
const { body, query, param } = require("express-validator");
const apiValidation = require("../validation/apiValidation");

const {
    getDataController,
} = require("../controllers/users.controller");

router.get("/get", apiValidation, getDataController);