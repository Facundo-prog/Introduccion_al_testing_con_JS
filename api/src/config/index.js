require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL,
  dbProdName: process.env.DB_PROD_NAME,
  dbTestName: process.env.DB_TEST_NAME,
};

module.exports = { config };
