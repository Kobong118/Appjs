const getWaktu = ()=>{
    let date = [
         new Date().getDay(),
         new Date().getMonth(),
         new Date().getFullYear()
     ]
     let waktu = [
        new Date().getHours(),
        new Date().getMinutes(),
        new Date().getSeconds()
     ]
     return `${date.join('-')}_${waktu.join(':')}WIB `
}

module.exports ={
    getWaktu
}