/**
 * @type {import('next').NextConfig}
*/

require('dotenv').config();

const basePath = process.env.NEXT_PUBLIC_GITHUB_PAGES ? '/faq' : '';

module.exports = {
  assetPrefix: basePath,
  basePath: basePath,
  trailingSlash: true,
  output: 'export',
};
