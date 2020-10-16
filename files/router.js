const FILE_SERVICE = require("./service");

const router = require("express").Router();

const getFilenames = (req, res) => {
  FILE_SERVICE.getFilenames(res);
};

const getFile = (req, res) => {
  FILE_SERVICE.getFile(req.params.filename, res);
};

const saveFile = (req, res) => {
  FILE_SERVICE.saveFile(req.body.name, req.body.data, res);
  res.send("done")
};

router.get("/files", getFilenames);
router.get("/files/:filename", getFile);
router.post("/files", saveFile);

module.exports = router;
