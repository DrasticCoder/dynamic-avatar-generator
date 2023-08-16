import express from "express";
import path from "path";
import cors from "cors";
import rfs from "rotating-file-stream";
import { fileURLToPath } from "url";
import ErrorMiddleware from "./middleware/Error.js";

const app = express();
app.set("view engine", "ejs");
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());

// Create a rotating write stream
let accessLogStream = rfs.createStream("access.log", {
    interval: "1d", // rotate daily
    path: path.join(__dirname, "logs"),
  });


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));


// Route Imports
import apiRoutes from "./routes/apiRoute.js";
import rootRoute from "./routes/index.js";

app.use("/api/", apiRoutes);
app.use("/", rootRoute);

app.get("*", (req, res) => {
    // res.render(__dirname + "/views/common/auth/page-not-found");
    console.log(req.path)
    res.status(500).json({
      success: false,
      message: "The resource you are trying to get is not available.",
    });
  });

export default app;

app.use(ErrorMiddleware);