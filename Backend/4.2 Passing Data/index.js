import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numLetters = req.body["fName"].length + req.body["lName"].length;
  let f1name=req.body["fName"];
  let l1name=req.body["lName"];
  res.render("index.ejs", { numberOfLetters: numLetters ,
                            firstname: f1name,
                            lastname:l1name,
                            });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
