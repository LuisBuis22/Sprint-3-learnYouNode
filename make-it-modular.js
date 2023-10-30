const filterModule = require('./mymodule');
const mymodule = require('./mymodule')

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, (err, filteredFile) => {
  if(err) {
    return console.error(err);
  }

  filteredFile.forEach((file) => {
    console.log(file);
  });
});

