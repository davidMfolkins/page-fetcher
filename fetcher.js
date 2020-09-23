const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
const fileName = args[1];


request(args.toString(), (error, response, body) => {
  fs.writeFile(fileName, body, { flag: "wx" }, function(err) {
    if (err) return console.log(err);
    console.log(`Downloaded and saved ${body.length} bytes to ./${fileName}`);
  });
});



