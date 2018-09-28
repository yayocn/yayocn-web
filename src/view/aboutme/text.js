import { isString, filter } from 'lodash';

export const context = `
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: fs.createReadStream('sample.txt')
});

rl.on('line', (line) => {
    console.log('Line from file:', line);
});
`;

const createByline = (text, split) => {
  let result = [];
  if (isString(text)) {
    result = text.split(split);
  }
  console.log(result)
  return result;
}

export const lineStrList = createByline(context, '\n');
