let done = true

const isItDoneYet = ()=>{
  return new Promise((resolve,reject)=>{
      fs.readFile('sample3.txt','utf-8', (err,data)=>{
           if (done) {
              const workDone = 'here is the thing  i built'
              resolve(workDone);
            }  else {
             const why = 'still working on something else'
             reject(why);
             
            }
        })
    
    })
}
