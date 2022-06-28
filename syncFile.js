// file module 
 
const {readFileSync, writeFileSync, closeSync} = require('fs');

// To read file 
// we need to provide two parameters 
//1- path to that specific file 
//2- what is the encoding

console.log('start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second)

writeFileSync('./content/result-sync.txt',`Here is the result:  ${first}, ${second}`,{flag:'a'});

console.log('done with this task');
console.log('starting next task');
