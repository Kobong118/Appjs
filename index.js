const readline = require('readline');
const validasi = require('./data/module/validasi');
const kalimahIsim = require('./data/module/kalimahIsim')
const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});
kalimahIsim.mainAddData();