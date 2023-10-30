let fs = require('fs');

let fileOne = fs.readFileSync(process.argv[2]);

const separatedLines = fileOne.toString().split('\n').length - 1;

console.log(separatedLines);