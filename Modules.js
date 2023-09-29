let http = require('http');
http.createServer(function (req, res) {
    res.write('hello from server');//write a response to the client
    res.end();//end of response from server
}).listen(6000);//the server instance listens for http requests on port 6000


// sample code to read a file synchronously using the fs.readFile() method
const fs = require('fs');
const data = fs.readFile('sample.txt', 'utf8');
// print contents of the file "sample.txt" to console
console.log(data);

const fs = require(‘fs’);
const data = fs.readFileSync(‘/content.md’); // blocks here until file is read
console.log(data);//writes data in the content.md file to the console

let os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());

const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); //outputs home.html to the console

let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
    console.log(util.format(str, i)); //outputs 'The loop has executed i time(s)'
}

const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //outputs Clark

let qry = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //returns Clark
