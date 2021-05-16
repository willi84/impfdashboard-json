if [ -d "tmp" ]; then rm -Rf tmp; fi
mkdir tmp
curl https://impfdashboard.de -o tmp/index.html
# curl https://impfdashboard.de/data/germany_vaccinations_timeseries_v2.0eae855d.tsv -o tmp/data.tsv
node ./getfile.js
./node_modules/.bin/tsv2json tmp/data.tsv
node ./analyze.js
cp tmp/current.json ./docs/current.json