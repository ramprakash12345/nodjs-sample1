
const fs = require ('fs');

const funRead = () => {
    return new Promise ((resolve,rejects)=>{
        fs.readFile('sampletext.txt', 'utf-8', (err,data)=>{
            if (err){
                console.error (err);
                rejects(err);
            }
            resolve(data);
    
        })
    })

}
funRead().then ((result)=> {
    console.log('i am in then block');
    console.log(result)
    
    return new Promise ((resolve,rejects)=>{
        fs.appendFile('sampletext.txt','chhatarpur',(err)=>{
            if (err){
                reject (err);
            }
            console.log('in 2nd block');
            return resolve('append successful');
        

        })
    })
}).then ((msgAppend)=>{
    console.log(msgAppend);
   
    fs.readFile('sampletext.txt', 'utf-8',(err, dataR)=>{
        if (err){
            console.error(err);
            throw err;
        }
        console.log('in 3rd block');
        console.log(dataR);
    })
}).catch((err)=>{
    console.error('i am in catch block');
    console.error(err);
})
