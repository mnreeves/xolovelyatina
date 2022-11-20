import { CONFIG_APP } from './config/config';
import { Client } from "twitter-api-sdk";
import { getFirestore } from 'firebase-admin/firestore';
import admin from 'firebase-admin';
import * as functions from "firebase-functions";
import Cors from 'cors';
import express, { Express, Request, Response } from 'express';
const serviceAccount = require("../service-account.json");


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = getFirestore();


async function main() {
  const client = new Client(CONFIG_APP.TWITTER_BEARER_TOKEN);
  await client.tweets.addOrDeleteRules(
    {
      add: [
        { "value": "from:mn_reeves" }
      ],
    }
  );
  
  const stream = client.tweets.searchStream({
    "tweet.fields": ["author_id", "created_at", "text"],
  });
  for await (const tweet of stream) {
    db.collection('activites').add({
        "data": tweet.data
    })
  }
}

main();


const app: Express = express();
app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/wh-twitter', async (req: Request, res: Response) => {
  res.send('okee');
})

export const api = functions.https.onRequest(app);
