const synArabic = (value)=>{
    const regex = /[ا-ي]/;
    return regex.test(value);
}

module.exports={
    synArabic
}