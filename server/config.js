require('dotenv').config();

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production';

module.exports = { PORT: PORT, dev: dev };
