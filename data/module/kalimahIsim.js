const fs = require("fs");
const pertanyaan = require('./requests')

const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
// engine menambah data base kalimah isim
const addData =(nama , wajan , contoh)=>{
  const dataIsim = {nama,wajan,contoh};
  const fileBuffer = fs.readFileSync("data/kalimatIsim.json","utf-8");
  const dataIsimS = JSON.parse(fileBuffer);
  dataIsimS.push(dataIsim);
  fs.writeFileSync('data/kalimatIsim.json', JSON.stringify(dataIsimS));
  console.log(`data berikut :
  nama : ${nama},
  wajan : ${wajan},
  contoh :${contoh}
  Berhasil di tambahkan ...`);
  rl.close()
};
// permintaan menambah data base kalimah isim
const mainAddData = async()=>{
  const namaKalimat =await pertanyaan.tulisPertanyaan("Masukan Nama kalimat :");
  const wajan = await pertanyaan.tulisPertanyaan("Masukan Wajan kalimatnya :");
  const contoh = await pertanyaan.tulisPertanyaan('Masukan Contohnya :');
  addData(namaKalimat,wajan,contoh);
};
module.exports={mainAddData};
