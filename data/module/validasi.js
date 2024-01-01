 function textArabic (text){
  const regex = /[ا-ي]/
  if(regex.test(text)){
    return text;
  }else{
    return `${text} yang anda masukan bukan syntex Arabic`
  };
};
module.exports ={textArabic}
