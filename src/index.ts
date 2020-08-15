import express, { Router } from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import compression from "compression";
import { startControllers } from "./routes";
const PORT = 3000;

const app = express();
app.use(helmet());
app.use(compression());
app.use(bodyParser.json());

app.get("/info", (req, res) => {
  console.log("Logzinho");
  res.sendStatus(204);
});

startControllers(app);

app.listen(PORT, () => {
  console.log(`Tá online na porta: ${PORT}`);
});
