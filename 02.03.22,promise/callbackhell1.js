const fs = require('fs');


app.get ('/sampletext.txt', function (req, res){
    var name = req.query.name;
    console.log(name);
    Scopus . find({name : name},
        {'_id': 0, 'authorId': 1},
        function(err, result){
            if(err){ }
            else {
                var searchResult = result[0]['authorId'];
                console.log(searchResult);
                var options = {
                    url: 'htttps://api.elsevier.com/content/author/author_id/'
                        + searchResult + '?apiKey',
                    headers: {'accept': 'application/json' }    
                };
                request(options, function(error, response, body){
                    if (error){
                        //print the error if one occurred
                        console.error('error in Author:',error);
                        // print the response status code if a response was recieved
                        console.log('statusCode:', response && response.statusCode);
                        res.send('error')
                    
                    }
                    else if (!error){
                        var jsonObj = JSON.parse(body);
                        if (jsonObj['aauthor-retrieval-response']== undefined){
                            res.send('No details');
                        }
                        else{
                            var reqData = jsonObj['author-retrieval-response'][0];
                            var authprofile= reqData['author-profile'];
                            var names = authprofile['preferred-name'] ['indexed-name'];
                            console.log(names);
                            var citation = reqData ['coredtata'] ['citation-count'];
                            var query = { authorId: searchResult};

                            Scopus.findOneAndUpdate(query, {
                                name: names,
                                citationCount: citation
                            }, function (err, doc, res){
                                if (err){
                                    console.log('error');
                                }
                                else {
                                    console.log('success');
                                }
                            })
                            res.render('details',{data: reqData});
                        }
                    }
                });
            }
        })
});