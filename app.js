const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const {body, validationResult, check} = require('express-validator');
const {synArabic} = require('./utility/valInpDat');
const {getWaktu} = require('./utility/waktu');
const {ConDb}=require('./utility/db');
const sqlite3 = require('sqlite3').verbose();

const app = express()
const port = 3000

app.set('view engine','ejs')
// Third-party middleware
app.use(expressLayouts)
app.use(morgan('dev'))
// Built-in middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// path databse
const pathAlmaany = './db/Almaany.db'

// route home
app.get('/', (req, res) => {
  res.render('index',{title:'Ikhwaanii Media',
layout:'layouts/main-layout'})
});
// midleware route input data
app.use('/inputdata',(req,res,next)=>{
  next();
})
// route input data
app.get('/inputdata',(req,res)=>{
  ConDb(pathAlmaany)
  .get('SELECT count(kata) FROM tabelKata',(er,suc)=>{
    if(er){
      throw er
    }else{
      res.render('inputdata',{
        title:'input data',
        layout:'layouts/curd-layout',
        jd : Object.values(suc)[0]
      })
    }
  })
  
});
// route input data post
app.post('/inputdata/:kategori.:aksi',(req,res,next)=>{
  if(req.params.kategori == "kamus"){
    // validasi ketersediaan data
    ConDb(pathAlmaany)
    .get(`SELECT kata,
    penjelasan,
    kataPencarian,
    akarKata,
    arti
    FROM tabelKata
    WHERE kataPencarian = '${req.body.kataKunci}'`,(e,r)=>{
      if(e){
        return console.error(err.message);
      }
      if (r.kata != req.body.Kata || r.kataPencarian != req.body.kataKunci) {
       console.log('siap di insert') ;
       res.render('kelolaKamus',{
        title:'kelola data kamus',
        layout:'layouts/curd-layout'
      })
      }else{
        res.render('kelolaKamus',{
          title:'kelola data kamus',
          layout:'layouts/curd-layout',
          dt : r
        })
      }
    }).close()
    
  }else{
    next()
  }
})

// app.post('/inputdata',[
//   // validasi bentuk kalimah
//   body('benKata').custom((value)=>{
//     if(!synArabic(value)){
//       throw new Error(`Bentuk tulisan "${value}" bukan syntax arabic`)
//     }
//     return true;
//   }),
//   // validasi data nama kalimah
//   body('namaKata').custom((value)=>{
//     if(!synArabic(value)){
//       throw new Error(`Data "${value}" bukan syntax arabic`)
//     }
//     return true;
//   }),
//   // validasi data wajan
//   body('wajan').custom((value)=>{
//     if(!synArabic(value)){
//       throw new Error(`Data "${value}" bukan syntax arabic`)
//     }
//     return true;
//   })
// ], (req,res)=>{
//   const errors = validationResult(req);
//   if (!errors.isEmpty()){
//     // return res.status(400).json({errors:errors.array()})
//     // console.log("errors.array()")
//     // console.log(errors.array())
//     // const waktu = getWaktu()
//     // console.log(waktu)
//     res.render('inputdata',{
//       errors : errors.array(),
//       title:'input data',
//       layout:'layouts/curd-layout',
//       pesanSuccErr : "error"
//     })
    
//   }else{
//     // console.log(req.body);
//     // const waktu = getWaktu()
//     // console.log(waktu)
//     res.render('inputdata',{
//       nam : req.body,
//       title:'input data',
//       layout:'layouts/curd-layout',
//        pesanSuccErr : "success"
//     }
//     )
//   }
// })
// route kamus
app.get('/kamus',(req, res)=>{
res.render('kamus',{
  title:'kamus',
  layout:'layouts/main-layout'
})
})

// route kamus post
app.post('/kamus',(req,res)=>{
  let valueCari = req.body.cariInKamus
  ConDb(pathAlmaany, sqlite3.OPEN_READONLY)
  .all(`SELECT id ,
    kata,
    penjelasan,
    kataPencarian,
    akarKata,
    arti
    FROM tabelKata
    WHERE kataPencarian LIKE '%${valueCari}%'
    ORDER BY kata`,(err,hasil)=>{
      if(err){
        throw err
        res.render('kamus',{
          title:'kamus',
          layout:'layouts/main-layout',
          dt : ''
          })
      }else{
        const sesuai = hasil.filter((objek)=>{
         return valueCari == objek.kataPencarian
        })
        const relevan = hasil.filter((objek)=>{
          return valueCari != objek.kataPencarian
         })
        res.render('kamus',{
          title:'kamus',
          layout:'layouts/main-layout',
          dt : {sesuai,relevan}
          })
      }
    })
    .close(e=>(e)? console.log(e):console.log('Database terputus'))
})

app.use((req, res) => {
  res.status(404)
  res.render('404',{
    title:'Halaman tidak di temukan',
    layout:'layouts/404'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})