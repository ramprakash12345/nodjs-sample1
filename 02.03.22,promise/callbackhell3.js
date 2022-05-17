// example to read a file in ES6.
const fs = require('fs');
const { readFile } = require('fs/promises');
const _dirname= ('saurabh');
let filename = `${_dirname}/sampletext.txt`;

fs.exists  (filename, exists => {
    if (exists){
        fs.stat(filename, (err, stats)=> {
            if(err){
                throw err;
            }
            if(fs.Stats.isFile()){
                fs.readFile(filename, null, (err, data)=>{
                    if (err){
                        throw err;
                    }
                    console.log(data);
                
                });
            
            }
            else {
                throw new Error('This location contains not a file');
            }

        });
    }
    else {
        throw new Error ('404: FILE NOT FOUND');
    }
});
