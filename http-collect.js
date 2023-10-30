const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, (response) => {
  response.pipe(bl(function (err, data) {
    if(err) {
      return console.error(err);
    }

  const dataString = data.toString();

  console.log(dataString.length);
  console.log(dataString);
  }));
});