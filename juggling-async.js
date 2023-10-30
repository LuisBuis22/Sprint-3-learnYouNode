const http = require('http');
const bl = require('bl');

const contents = process.argv.slice(2);
const dataList = [];
let count = 0;

function printContent() {
  dataList.forEach((data) => console.log(data));
}

contents.forEach((url, index) => {
  http.get(url, (response) => {
    response.pipe(bl((err, data) => {
      if(err) {
        return console.error(err);
      }

      dataList[index] = data.toString();
      count++;

      if(count === contents.length) {
        printContent();
      }
    }));
  });
});
