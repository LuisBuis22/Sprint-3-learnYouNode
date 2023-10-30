const fs = require('fs');

const directory = process.argv[2];

fs.readdir(directory, (err, data) => {
  if(err) {
    return console.error(err);
  } 

  data.forEach((file) => {
    if (file.endsWith(".md")) {
      return console.log(file)
    }
  });
});

