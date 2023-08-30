
var fs = require('fs');

fs.readFile('to_be_read.txt','utf8', function(err, data) {
    if (err) {
        console.log(err);
    }
    else{
    console.log(data);
    setTimeout(() => {
        console.log("hi i will be run later");
    }, 2000);
   }
});

console.log("I will be run earlier because the async command is done due to which it will send the to_be_read.txt first and immediately start doing other tasks");
