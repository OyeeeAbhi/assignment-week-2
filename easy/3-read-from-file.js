const fs = require('fs');

fs.readFile('read.txt' , 'utf-8' , (err , data)=>{
    console.log('this is the data from txt file ---->' , data );
})