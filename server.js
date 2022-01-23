import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

import Connection from './database/db.js';
import Routes from './routes/routes.js'
import HDefaultData from './hdefault.js';
import TDefaultData from './tdefault.js';
import CDefaultData from './cdefault.js';

//iitialise dotenv
dotenv.config();

const app = express();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/', Routes)

const PORT = process.env.PORT || 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const URL = `mongodb+srv://${username}:${password}@amazonprimevideo.urll5.mongodb.net/SUBSCRIPTION_VIDEO?retryWrites=true&w=majority`;

Connection(process.env.MONGODB_URI || URL);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT, ()=>console.log(`Server is successfully running in port ${PORT}`));

//default data to database

HDefaultData();
TDefaultData();
CDefaultData();