function getUser (id, callback){
    setTimeout (() => {
        console.log('reading an user from database.... ');
        callback ({id: id, githubUsername: 'saurabhcode06'});
    }, 2000);
}

getUser(1, (user)=> {
    console.log('user', user);
})
