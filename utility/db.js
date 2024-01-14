const sqlite3 = require('sqlite3').verbose();
// const fs = require('fs')
let dbAlmaany = new sqlite3.Database('./db/Almaany.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the Almaany database.');
});
// const FiltetData = (kataKunci)=>{
//   // let Datas = []
// // connect data base 

// // // remove data file tmp
// //     // removeDataTmp();
// // // command sqlite
// // const sql = `SELECT id ,
// // kata,
// // penjelasan,
// // kataPencarian,
// // akarKata,
// // arti
// // FROM tabelKata
// // WHERE kataPencarian LIKE '%${kataKunci}%'
// // ORDER BY id`;
// // // filtering database
// // let data = dbAlmaany.each(sql,(error, rows) => {
// //   if (error) {
// //     throw error;
// //   }
// //     // const file = fs.readFileSync('./db/tmp/tmp.json','utf8');
// //     //   const dataTmp = JSON.parse(file);
// //     //   dataTmp.push(rows);
// //     //   fs.writeFileSync('./db/tmp/tmp.json', JSON.stringify(dataTmp));
// //     return JSON.stringify(rows)
// //   });
// //   console.log(data)
//   // close database
//   }


// // file sementara
// // membuat dir path jika belum ada
// const dirPath = './db/tmp'
// if(!fs.existsSync(dirPath)){
//     fs.mkdirSync(dirPath);
// }
// // membuat file json tmp jika blum ada
// const dataPath = './db/tmp/tmp.json'
// if(!fs.existsSync(dataPath)){
//     fs.writeFileSync(dataPath,'[]','utf8');
// }
// // hapus isi tmp.json jika ada
// const removeDataTmp =()=>{
//     const file = fs.readFileSync('./db/tmp/tmp.json','utf8');
//     const dataTmp = JSON.parse(file);
//     if(dataTmp.length > 0){
//           fs.writeFileSync('./db/tmp/tmp.json','[]','utf8');
//     }
// }
module.exports = {dbAlmaany}