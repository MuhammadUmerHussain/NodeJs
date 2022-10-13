let fs=require('fs');
//making folder
fs.mkdir("NODE",(err)=>{console.log("fOlder created")});
//making file
fs.writeFile("read.txt","Hello Craziest!",(err)=>{console.log("File created")});
//appending file
//reading file
fs.appendFile("read.txt"," You are not crazy!",(err)=>{console.log("appending created")});
fs.readFile("read.txt","utf-8",(err,data)=>{console.log(data)});
console.log("Hello Dear!");//run first beacuse of asynchronus

//fs.unlink("read.txt",(err)=>{console.log("appending created")}); delete file
//fs.rmdir for remove folder
