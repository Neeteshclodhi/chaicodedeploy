require('dotenv').config();

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
          res.send("hello world");
})

app.get("/instagram", (req,res) => {
          res.send("neetesh@123");  
})
app.get("/login", (req,res) => {
         res.send("<button>login page</button>") 
})

app.listen(process.env.PORT, () => {
          console.log(`server is running in port ${port}`)
})