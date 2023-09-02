import express from "express";

const app=express();

const port=3000;

app.get('/',(_req,res)=>{
    const today=new Date();
    const day=today.getDay();
    let type = "a weekday";
    let adv = "it's time to work hard";

    if(day === 0 || day === 6){
        type = "a weekend";
        adv = "it's time to relax and chill";   
    }
    res.render("solution.ejs", {
        dayType: type,
        advice: adv,
      });
    // console.log(_req)

});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});
// var http = require('http') , https = require('https') , express = require('express') , app = express();

// http.createServer(app).listen(80); https.createServer({ ... }, app).listen(443);
