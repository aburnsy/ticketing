import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError } from '@burnstickets/common';

const app = express();
app.set('trust proxy', true); //express is behind nginx proxy. Tell express it should trust traffic routed through proxy
app.use(json());
app.use(
  cookieSession({
    signed: false, //This means the cookie is not encrytped
    secure: process.env.NODE_ENV !== 'test', //https only
  })
);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
