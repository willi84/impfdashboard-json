if [ -d "tmp" ]; then rm -Rf tmp; fi
if [ -d "build" ]; then rm -Rf build; fi
mkdir tmp
mkdir build
curl https://impfdashboard.de -o tmp/index.html
# curl https://impfdashboard.de/data/germany_vaccinations_timeseries_v2.0eae855d.tsv -o tmp/data.tsv
node ./getfile.js
./node_modules/.bin/tsv2json tmp/data.tsv
node ./analyze.js
cp index.html ./build/index.html
cp tmp/current.json ./build/current.json
cp tmp/current.html ./build/current.html
