const fs = require('fs');

function mymodule(directory, extension, callback) {
  fs.readdir(directory, (err, files) => {
    if(err) {
      return callback(err);
    }
    const filteredFile = files.filter((file) => file.endsWith('.' + extension));
    callback(null, filteredFile);
  });
};

module.exports = mymodule;
