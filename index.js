import express from "express";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import db from "./db.js";
import testroute from "./routes/test.js";
import cors from "cors";
import morgan from "morgan"

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

db.connect((err) => {
  if (err) {
    console.log(err);
  }
  else console.log("Connected to database");
})

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/test", testroute);

app.get("/", (req, res) => {
  res.json("Hello")
})

app.listen(8080, () => {
  console.log("Connected! in 8080");
});