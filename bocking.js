var fs=require('fs');
var data=fs.readFileSync('to_be_read.txt');
console.log(data.toString());
console.log('reading done !');