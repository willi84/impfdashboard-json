const fs = require('fs');
// Calling the readFileSync() method
// to read 'input.txt' file
const data = fs.readFileSync('./tmp/data.tsv.json',
            {encoding:'utf8', flag:'r'});
// https://www.netzprogrammierer.de/mit-javascript-auf-beliebige-dezimalstellen-runden/
function round(wert, dez) {
        wert = parseFloat(wert);
        if (!wert) return 0;
        dez = parseInt(dez);
        if (!dez) dez=0;

        var umrechnungsfaktor = Math.pow(10,dez);

        return Math.round(wert * umrechnungsfaktor) / umrechnungsfaktor;
}
const input = JSON.parse(data)
let outputJSON = {};
const len = input.length;
outputJSON['json_updated'] = new Date().toLocaleString();
input[0].forEach((key, index) => {
    outputJSON[key] = input[len-1][index];
});
outputJSON['title_widget'] = "📅 Impfdashboard";
outputJSON['title_date'] = outputJSON['date'];
//outputJSON['title_erst'] = "   💉 Erst: " + parseInt(outputJSON['impf_quote_erst']*100, 10).toFixed(2) + '%';
outputJSON['title_erst'] = "   💉 Erst: " + round(outputJSON['impf_quote_erst']*100,2) + '%';
//outputJSON['title_voll'] = "💉💉 Voll: " + round(parseInt(outputJSON['impf_quote_voll']*100, 10),2) + '%';
outputJSON['title_voll'] = "💉💉 Voll: " + round(outputJSON['impf_quote_voll']*100,2) + '%';
outputJSON['title_change'] = "⬆️ +" + new Intl.NumberFormat('de-DE', { style: 'decimal'}).format(outputJSON['dosen_differenz_zum_vortag']);
fs.writeFileSync("./tmp/current.json", JSON.stringify(outputJSON));
