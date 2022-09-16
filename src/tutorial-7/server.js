const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();

app.use(cors());
app.use(express.static(__dirname));
// app.use(
//   multer({
//     storage: multer.diskStorage({
//       destination: function (req, file, cb) {
//         cb(null, "./public");
//       },
//       filename: function (req, file, cb) {
//         cb(null, file.originalname);
//       },
//     }),
//   }).single("file")
// );
app.use(fileUpload()); // multer or express-fileupload

app.post("/", function (req, res) {
  // //using multer
  //   let file = req.file;
  //   if (!file) {
  //     res.send("Ошибка при загрузке файла");
  //   } else {
  //     res.send("Файл загружен");
  //   }

  //using express-fileupload
  const file = req.files.fileupload; //fileupload is corresponding formData field

  if (!file) {
    res.send("Ошибка при загрузке файла");
  } else {
    file.mv("./public/" + file.name);
    res.send("Файл загружен");
  }
});

app.listen(9999, () => {
  console.log("Сервер запущен!");
});
