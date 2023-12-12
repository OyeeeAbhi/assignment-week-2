const fs = require('fs');
let data = 'i am abhishek and working as backend developer and graduated in 2023'
fs.writeFile('writefile.txt' , data , (err)=>{
    if(err){
        console.log(err , 'some error occured while writting to file')
    }else{
        console.log('wrtting to file is successfull');
    }
})