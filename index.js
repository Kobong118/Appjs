const readline = require('readline');
const validasi = require('./data/module/validasi')
const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout,
});
rl.question('masukan kalimat :',(kalimat)=>{
  const vali = validasi.textArabic(kalimat);
  console.log(vali);
  rl.close();
})
