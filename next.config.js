/* eslint-disable @typescript-eslint/no-var-requires */
require("dotenv").config();
// const withCSS = require("@zeit/next-css");  
// const withFonts = require("next-fonts");

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    GRAPHQL_URL: process.env.API_URL + '/graphql',
    IMAGE_ASSET_URL: process.env.IMAGE_ASSET_URL || '',
    SITE_TITLE: process.env.SITE_TITLE || 'Site Title'
  },
  target: "serverless",
};
