const { Router } = require("express");

//const cupRouter = require("./cupRouter");

const storeRouter = require("./storeRouter")

const router = Router();

//router.use("/product", cupRouter);

router.use("/store", storeRouter)


module.exports = router;
