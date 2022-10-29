const { readFileSync, readdirSync, statSync, writeFileSync } = require('fs');
const { createFileSync } = require('fs-extra');
const { upperFirst } = require('lodash');
const { join } = require('path');

function refactorFiles(
  obj = {},
  dirpath = '',
  level = 0,
  callback = () => null
) {
  const dirs = readdirSync(dirpath);

  for (const d of dirs) {
    const currentFilePath = join(dirpath, d);

    const currentFileStats = statSync(currentFilePath);

    if (currentFileStats.isFile()) {
      obj[d] = { type: 'f' };
      obj[d].path = currentFilePath;
      obj[d].content = readFileSync(currentFilePath).toString();

      callback(currentFilePath, obj[d].content);
      continue;
    }

    if (currentFileStats.isDirectory()) {
      obj[d] = { type: 'd' };
      obj[d].path = currentFilePath;
      obj[d].content = refactorFiles({}, join(dirpath, d), level + 5, callback);

      continue;
    }
  }
  return obj;
}

const TAMPLATES = '__templates__';
const OUTPUT = 'dist';

function handler(filename = '', classname = '') {
  return function cback(filePath = '', content = '') {
    const npath = filePath
      .replaceAll('sample', filename)
      .replaceAll(TAMPLATES, OUTPUT);

    const ncontent = content
      .replaceAll('sample', filename)
      .replaceAll('Sample', classname);

    console.log('Created ' + npath);
    createFileSync(npath);
    writeFileSync(npath, ncontent);
  };
}

const resourceNames = [
  'product',
  'price',
  'pricelevel',
  'department',
  'user',
  'feature',
  'quantity',
  'store',
  'order',
  'transaction',
  'tag',
  'customer',
  'employee',
  'project',
  'sprint',
  'issue',
  'blog',
  'article',
  'message',
  'sample',
  'notification',
  'email',
  'log',
  'img',
  'video',
  'role',
  'permission',
  'note',
  'sku',
  'comment',
  'review',
  'promotion',
  'ad',
];

for (const e of resourceNames) {
  refactorFiles({}, join(__dirname, TAMPLATES), 0, handler(e, upperFirst(e)));
}
