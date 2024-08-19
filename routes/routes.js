const router = require("express").Router();
const users = require("../utils/users");

router.use('api/v1/tickets', require('../routes/tickets'));


router.get('/health', (_req, res) => {
    res.status(200).json({"message": "Welcome to the server"});
})
router.get('/users', (req, res)=>{
    res.json(users)
})
router.get("/", (req, res) => {
    res.status(200).json({"message": "Hello Home from the server"});
})

module.exports = router;