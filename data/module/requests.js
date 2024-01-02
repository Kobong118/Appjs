const { rejects } = require("assert")
const { resolve } = require("path")
const kaimahIsim = require("./kalimahIsim")
const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const tulisPertanyaan = (pertanyaan)=>{
    return new Promise((resolve, rejects)=>{
        rl.question(pertanyaan,(data)=>{
            resolve(data);
        });
    });
};
module.exports={tulisPertanyaan};