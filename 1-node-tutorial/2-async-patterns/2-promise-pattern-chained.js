// Implementation with creating a promise manually
// and handling resolve and reject by chaining functions
// to mimic try-catch block.

const { readFile } = require('fs');

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

getText(__dirname + '/../content/first.txt')
  .then((result) => console.log(result))
  .catch((err) => console.log(err));
