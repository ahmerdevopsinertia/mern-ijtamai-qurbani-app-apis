const express = require('express');
// Route files
const healthCheck = require('./healthCheck');
const helloWorld = require('./helloWorld');

const app = express();

module.exports.app = () => {
    // Mount all routes
    app.use('/api/v1/health/check', healthCheck);
    app.use('/api/v1/hello/world', helloWorld);
};