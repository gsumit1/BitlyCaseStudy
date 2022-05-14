/* eslint-env node */

const env = process.env.NODE_ENV; // 'dev' or 'test'
const dev = {
   url: 'https://www.qrcode-monkey.com/'
};

const test = {
   url: 'https://vast-dawn-73245.herokuapp.com/'
};

const config = {
 dev,
 test
};

module.exports = config[env.trim()];
