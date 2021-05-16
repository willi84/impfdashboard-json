const fs = require('fs');
const { exec } = require("child_process");

// Calling the readFileSync() method
// to read 'input.txt' file
const html = fs.readFileSync('./tmp/index.html',
{encoding:'utf8', flag:'r'});

const match= html.match(/(germany_vaccinations_timeseries_[^"]*tsv)/);
exec("curl https://impfdashboard.de/data/" + match[1] + " -o ./tmp/data.tsv", (error, stdout, stderr) => {
    if (error) {
        console.log(`error: ${error.message}`);
        return;
    }
    // exec("node ./node_modules/.bin/tsv2json tmp/data.tsv", (error2, stdout2, stderr) => {
    // // exec("ls -al", (error2, stdout2, stderr) => {
    //     // if (error2) {
    // //         console.log(`error: ${error2.message}`);
    // //         return;
    // //     }
    //     console.log(`stdout: ${stdout}`);
    //     const data = fs.readFileSync('./tmp/data.tsv.json',
    //                 {encoding:'utf8', flag:'r'});
    //    const input = JSON.parse(data)
    //    console.log(input.length)
    // //                 let outputJSON = {};
    // //             const len = input.length;
    // //             input[0].forEach((key, index) => {
    // //                 outputJSON[key] = input[len-1][index];
    // //             });
    // //             fs.writeFileSync("./tmp/current.json", JSON.stringify(outputJSON));
    // });
});
