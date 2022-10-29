const { readFileSync, readdirSync, statSync, writeFileSync } = require('fs');
const { createFileSync } = require('fs-extra');
const { upperFirst } = require('lodash');
const { join } = require('path');

const dirs = readdirSync(join(__dirname, 'templates'));

function readDirs(obj = {}, dirpath = '', level = 0, callback = () => null) {
  const dirs = readdirSync(dirpath);
  const padding = ' '.repeat(level);
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
      obj[d].content = readDirs({}, join(dirpath, d), level + 5, callback);

      continue;
    }
  }
  return obj;
}

function handler(filename = '', classname = '') {
  return function cback(filePath = '', content = '') {
    const npath = filePath.replaceAll('category', filename);
    const ncontent = content
      .replaceAll('category', filename)
      .replaceAll('Category', classname);
    console.log('Create ' + npath);

    createFileSync(npath);
    writeFileSync(npath, ncontent);
  };
}

[
  'product',
  'price',
  'pricelevel',
  'department',
  'user',
  'customer',
  'feature',
  'quantity',
  'store',
  'tag',
  'order',
  'transaction',
  'employee',
  'project',
  'sprint',
  'issue',
  'menuitem',
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
].forEach((e) => {
  readDirs({}, join(__dirname, 'templates'), 0, handler(e, upperFirst(e)));
});
