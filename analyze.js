const fs = require('fs');
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./tmp/data.tsv.json',
            {encoding:'utf8', flag:'r'});

const input = JSON.parse(data)
let outputJSON = {};
const len = input.length;
outputJSON['json_updated'] = new Date().toLocaleString();
input[0].forEach((key, index) => {
    outputJSON[key] = input[len-1][index];
});
outputJSON['title_widget'] = "📅 Impfdashboard";
outputJSON['title_date'] = outputJSON['date'];
outputJSON['title_erst'] = "   💉 Erst: " + outputJSON['impf_quote_erst']*100 + '%';
outputJSON['title_voll'] = "💉💉 Voll: " + outputJSON['impf_quote_voll']*100 + '%';
outputJSON['title_change'] = "⬆️ +" + outputJSON['dosen_differenz_zum_vortag'];
fs.writeFileSync("./tmp/current.json", JSON.stringify(outputJSON));
