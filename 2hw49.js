
var figlet = require('figlet');
var word = process.argv[2];

figlet(word, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});