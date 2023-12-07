module.exports = (app) => {
  const user = require("../controllers/user.controller");
  const admin = require('../controllers/admin.controller')
  let router = require("express").Router();

  router.post("/create", user.create);
  //   router.put("/update", user.update);
  //   router.post("/delete", user.delete);
  router.post("/login", user.login)
  router.get("/", user.findUser);
  router.get("/:id", user.findOne);
  //   router.post("/find", user.findOne);
  router.post("/findID", user.findUserID);

  //ill just place admin here fuck it
  router.post("/admin/create", admin.create);

  app.use("/api/users", router);
};
