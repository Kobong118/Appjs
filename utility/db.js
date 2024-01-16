const sqlite3 = require('sqlite3').verbose();
// const fs = require('fs')
let ConDb = (pathDataBase,method)=>{
  return new sqlite3.Database(pathDataBase,method, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log(`Terhubung ke ${pathDataBase} dengan method ${method}`);
  });
}
// const sql = (method,field,table,key)=>{
//   return `SELECT id ,
//   kata,
//   penjelasan,
//   kataPencarian,
//   akarKata,
//   arti
//   FROM tabelKata
//   WHERE kataPencarian LIKE '%${}%'
//   ORDER BY kata`;
// }
























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




// Ada tiga mode pembukaan:

// sqlite3.OPEN_READONLY: membuka database untuk read-only.
// sqlite3.OPEN_READWRITE: membuka database untuk membaca dan menulis.
// sqlite3.OPEN_CREATE: buka database, jika database belum ada buat database baru.
// Menerima sqlite3.Database()satu atau lebih mode sebagai argumen kedua. Secara default, ini menggunakan OPEN_READWRITE | OPEN_CREATEmode. Artinya jika database belum ada maka database baru akan dibuat dan siap untuk dibaca dan ditulis.



module.exports = {ConDb}