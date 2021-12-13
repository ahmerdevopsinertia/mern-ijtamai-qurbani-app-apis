import config from "./config/config";
import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import cors from 'cors';
import routes from './routes';
import errorHandler from './middleware/error';

// Initiating env variables.
config();

import dbConnection from './config/db';


// Initiate the Database Connection
dbConnection();

// Initate express app
const app = express();

// Registering routes
app.use(routes);

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Handling CORS
app.use(cors());

// Handling errors
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(
    PORT,
    () => {
        console.log(
            colors.yellow(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
        )
    }
);

exports.app = app;
