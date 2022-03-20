function timeout (ms){
    return new Promise(function(resolve,reject){
        setTimeout(function() {
            resolve("It was resolved!");
        }, ms)
    });
}

timeout(1000).then(function(dataFromPromise){
    // logs "it was resolved!"
    console.log(dataFromPromise);

})
console.log('waiting...');