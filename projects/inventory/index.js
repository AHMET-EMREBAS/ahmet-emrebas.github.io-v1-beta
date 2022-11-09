const { readFileSync } = require('fs');
const yaml = require('js-yaml');
const { join } = require('path');
const path = require('path');

const j = yaml.load(readFileSync(join(__dirname, 'product.entity.yaml')));

console.log(j);
