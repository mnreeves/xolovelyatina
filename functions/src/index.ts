import * as functions from "firebase-functions";
import Cors from 'cors';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/wh-twitter', (req: Request, res: Response) => {
  res.send('okee');
})

export const api = functions.https.onRequest(app);
