const express = require("express");
const cors = require("cors");
const path = require("path");
const port = 5001;

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.get("/download/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "public", imageName);
  res.download(imagePath, imageName);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
