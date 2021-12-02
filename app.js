
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const mountAll = require('./routes/mountAll');

// Load env vars
dotenv.config({ path: './config/.env_development' });

// Initate express app
const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(cors());

// route files
const healthCheck = require('./routes/healthCheck');
const helloWorld = require('./routes/helloWorld');

// // Mount all routes
app.use('/api/v1/health/check', healthCheck);
app.use('/api/v1/hello/world', helloWorld);

const PORT = process.env.PORT || 5001;

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
);

exports.app = app;

