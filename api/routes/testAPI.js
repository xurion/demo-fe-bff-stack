let express = require("express");
let router = express.Router();

router.get("/", (req, res, next) => res.send("API working fine!"));

module.exports = router;
