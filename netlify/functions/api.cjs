const serverless = require('serverless-http');
const app = require('../../backend/server.cjs');

module.exports.handler = serverless(app);
