import express from "express";
import cors from "cors";
import predictRoutes from "./routes/predict.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/predict", predictRoutes);

app.listen(5000, () => console.log("Node Backend running on port 5000"));
