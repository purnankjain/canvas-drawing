global.__basedir = __dirname;
const app = require("./app");
const port = 8080;
var cors = require("cors");

app.listen(port, () => {
  console.log(`Canvas Drawing Backend app listening at http://localhost:${port}`);
});
