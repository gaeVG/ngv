const client = require('./build/webpack.client.js');
const server = require('./build/webpack.server.js');
const loadscreen = require('./build/webpack.loadscreen.js');
const web = require('./build/webpack.web.js');

module.exports = [server, client, loadscreen, web];
