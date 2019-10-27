import * as express from "express";

import { quotes } from "./quotes";

const getRandomQuote = (array: object[]): object => {
  return quotes[Math.round(Math.random() * array.length)];
};

export const router = express.Router();

router.get("/", (req, res) => {
  res.send(getRandomQuote(quotes));
});
