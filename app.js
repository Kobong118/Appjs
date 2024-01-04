const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const morgan = require('morgan')
const {body, validationResult, check} = require('express-validator');
const {synArabic} = require('./utility/valInpDat');
const {getWaktu} = require('./utility/waktu')

const app = express()
const port = 3000

app.set('view engine','ejs')
// Third-party middleware
app.use(expressLayouts)
app.use(morgan('dev'))
// Built-in middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

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
  res.render('inputdata',{
    title:'input data',
    layout:'layouts/main-layout'
  })
});
// route input data post
app.post('/inputdata',[
  body('benKata').custom((value)=>{
    if(!synArabic(value)){
      throw new Error(`Bentuk tulisan "${value}" bukan syntax arabic`)
    }
    return true;
  })
], (req,res)=>{
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    // return res.status(400).json({errors:errors.array()})
    console.log(errors.array())
    const waktu = getWaktu()
    res.render('inputdata',{
      errors : errors.array(),
      title:'input data',
      layout:'layouts/main-layout',
      waktu
    })
  }else{
    console.log(req.body);
    const waktu = getWaktu()
    console.log(waktu)
    res.render('inputdata',{
      nam : req.body,
      title:'input data',
      layout:'layouts/main-layout',
       waktu
    }
    )
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})