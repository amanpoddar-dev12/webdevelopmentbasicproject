
import express from "express";
import { dirname } from "path";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app=express();
const port=3000;

// import { writeFile, readFile } from "fs";

// writeFile("message.txt","helo", (err) => {
//   if (err) throw err;
//   console.log("The file has been saved!");
// });

// readFile("message.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
app.get("/", (req, res) => {
    // const msg=req.body["textdata"];
    res.sendFile(__dirname + "/index.html");
    // console.log(msg)
    const msg=req.body["textname"];
    console.log(msg)
  });
   
// app.post("/",(req,res)=>{
//     const msg=req.body["textname"];
//     console.log(msg)
// })
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});