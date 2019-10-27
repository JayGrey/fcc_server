import * as compression from "compression";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as morgan from "morgan";

import { router as quoteRouter } from "./routes/rqm";

const app = express();
const port = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use(cors());
app.use(helmet());
app.use(compression());

app.use("/rqm", quoteRouter);

app.use((req, res) => res.status(404).end());

app.listen(port, () =>
  console.log(`server is started and listening on port ${port} !!`),
);
