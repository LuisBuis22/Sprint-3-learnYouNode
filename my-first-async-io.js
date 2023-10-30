const fs = require('fs');

const fileOne = process.argv[2];

fs.readFile(fileOne, 'utf8', (err, data) => {
  if (err) {
    return console.log(err);
  } else{
    const separatedLines = data.toString().split('\n').length - 1;
  console.log(separatedLines);
  }
})