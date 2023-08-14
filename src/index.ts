import express from "express";
import cors from "cors";
import itensRouter from "./routers/itens-router";

const PORT = process.env.PORT || 4000;

const HOSTNAME = process.env.HOSTNAME || "localhost";

const app = express();

app.use(cors({ origin: ["http://localhost:3000"] }));
app.use("/api", itensRouter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use((req, res) => {
  res.status(404).send("404 Not Found");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});
