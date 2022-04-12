const pug = require('pug');
const path = require('path');
const fs = require('fs');

const compiledFunction = pug.compileFile(
  path.resolve(__dirname, 'views/index.pug')
);

if (!fs.existsSync('./dist')) {
  fs.mkdirSync('./dist');
}

fs.writeFile('./dist/index.html', compiledFunction(), (error) => {
  if (error) {
    console.log(error);
  }
});
