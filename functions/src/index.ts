import * as functions from "firebase-functions";
import Cors from 'cors';
import express, { Express, Request, Response } from 'express';
const { Autohook } = require('twitter-autohook');

(async start => {
  try {
    const webhook = new Autohook();
    
    // Removes existing webhooks
    await webhook.removeWebhooks();
    
    // Listens to incoming activity
    webhook.on('event', (event: any) => console.log('Something happened:', event));

    // Starts a server and adds a new webhook
    await webhook.start();
    
    // Subscribes to your own user's activity
    await webhook.subscribe({oauth_token: process.env.TWITTER_ACCESS_TOKEN, oauth_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET});  
  } catch (e) {
    // Display the error and quit
    console.error(e);
    process.exit(1);
  }
})(); 



const app: Express = express();
app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.post('/wh-twitter', (req: Request, res: Response) => {
  res.send('okee');
})

export const api = functions.https.onRequest(app);
