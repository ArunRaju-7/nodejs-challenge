const fs = require('fs');

function readFileContent(filepath){
    fs.readFile(filepath, 'utf-8', (err, data)=>{
        if(err){
            console.error(err);
            return;
        }
        console.log('File Content:')
        console.log(data);
    })
}

readFileContent('test.txt')