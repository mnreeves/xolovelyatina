import * as dotenv from 'dotenv' 

const pathEnvFile = process.cwd() + '/.env';
dotenv.config({ path: pathEnvFile });

export const CONFIG_APP = {
  SERVER_URL: process.env.SERVER_URL ?? '',
  SERVER_URL_ROUTER: process.env.SERVER_URL_ROUTER ?? '',
  TWITTER_API_KEY: process.env.TWITTER_API_KEY ?? '',
  TWITTER_API_KEY_SECRET: process.env.TWITTER_API_KEY_SECRET ?? '',
  TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN ?? '',
  TWITTER_ACCESS_TOKEN: process.env.TWITTER_ACCESS_TOKEN ?? '',
  TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET ?? '',
  TWITTER_CLIENT_ID: process.env.TWITTER_CLIENT_ID ?? '',
  TWITTER_CLIENT_SECRET: process.env.TWITTER_CLIENT_SECRET ?? '',
}