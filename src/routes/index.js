const { Router } = require("express");

const userRouter = require("./userRouter");
const storeRouter = require("./storeRouter")

const router = Router();

router.use("/store", storeRouter)
router.use("/user", userRouter)


module.exports = router;
