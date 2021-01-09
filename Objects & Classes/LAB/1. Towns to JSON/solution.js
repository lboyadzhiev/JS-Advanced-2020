const isNotEmptyString = x => x !== '';
const trimMyString = x => x.trim();
const parseIfNum = x => Number(x) ? Math.floor(Number(x) * 100) / 100 : x;


function extractData(str) {
   return str
      .split('|')
      .filter(isNotEmptyString)
      .map(trimMyString)
      .map(parseIfNum);
}

function solve(data) {
   let keys = extractData(data[0]);

   return data
      .slice(1)
      .map(extractData)
      .map(x => x.reduce((res, val, i) => {
         res[keys[i]] = val;
         return res
      }, {}))
}

console.log(
   solve(
      [
         '| Town | Latitude | Longitude |',
         '| Sofia | 42.696552 | 23.32601 |',
         '| Beijing | 39.913818 | 116.363625 |'
      ]
   )
); 