const { readFile,writeFile } = require("fs");

console.log('Start');
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt',`Here is the result ${first} ${second}` , (err,result=>{
            if(err){
             console.log(err);
                return;
            }
        console.log('done with this task');
        }))
    })
})

    console.log('starting next task');
// As it is outside the call back functions so if there will be a time in callback functions it will
// resolve the next oustside the function 
// so it is resolved before 






