// import fs from "fs";
const fs=require("fs");
fs.writeFile("message.txt","hello from node js",(err)=>{
    if(err) throw err;
    console.log("the file has been saved!");
});

// var temp=fs.readFile
// console.log(temp)

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });