const fs = require('fs');
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./tmp/data.tsv.json',
            {encoding:'utf8', flag:'r'});

const input = JSON.parse(data)
let outputJSON = {};
const len = input.length;
input[0].forEach((key, index) => {
    outputJSON[key] = input[len-1][index];
});
fs.writeFileSync("./tmp/current.json", JSON.stringify(outputJSON));
