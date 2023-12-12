const fs = require('fs');

fs.readFile('read.txt' , 'utf-8' , (err,data)=>{
    data = data.split(' ');
    data = data.filter((element , index)=>{
        if(element != ' ')return element;
    })
    data = data.join(' ');
    fs.writeFile('read.txt' , data , (err)=>{
        if(err){
            console.log('some error occured');
        }else{
            console.log('file cleaned sucessfully');
        }
    })
})