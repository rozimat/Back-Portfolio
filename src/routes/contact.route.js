const { Router } = require("express");
const { Rcreate, Rread} = require("../controllers/contact.controller")

const router = Router();


router.get("/",  Rread);
router.post("/message",  Rcreate)


module.exports = router;