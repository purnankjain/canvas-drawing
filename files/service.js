const fs = require("fs");
const { UPLOAD_FOLDER } = require("../constants/folders");

const getFilenames = (res) => {
  const files = fs.readdirSync(UPLOAD_FOLDER);
  res.json(files);
};

const getFile = (name, res) => {
  const file = fs.readFileSync(`${UPLOAD_FOLDER}/${name}.json`, "utf8");
  const data = JSON.parse(file);
  res.json({ data: data });
};

const saveFile = (name, data, res) => {
  fs.writeFile(`${UPLOAD_FOLDER}/${name}.json`, JSON.stringify(data), () => {
  })
};

const FILE_SERVICE = {
  getFilenames,
  getFile,
  saveFile
};

module.exports = FILE_SERVICE;
