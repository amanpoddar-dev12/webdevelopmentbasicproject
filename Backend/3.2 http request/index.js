import express from "express";

const app=express();
const port=7000;
app.get("/",(req, res)=>{
    // res.send(req.raw);
    console.log(req.rawHeaders)
    res.send("<h1>AMAN PODDAR</h1>");
});
app.get("/contact",(req, res)=>{
    // res.send(req.raw);
    console.log(req.rawHeaders)
    res.send("<h1>7759037668</h1>");
});
app.get("/about",(req, res)=>{
    // res.send(req.raw);
    console.log(req.rawHeaders)
    res.send("<h1>about us page</h1>");
});
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});