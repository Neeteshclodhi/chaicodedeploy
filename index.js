require('dotenv').config();

const express = require("express");
const app = express();
const port = 4000;
const githubApi = 
          {
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}




app.get("/", (req, res) => {
          res.send("hello world");
})

app.get("/instagram", (req,res) => {
          res.send("neetesh@123");  
})
app.get("/login", (req,res) => {
         res.send("<button>login page</button>") 
})

app.get("/github", (req,res) => {
          res.json(githubApi)
})

app.listen(process.env.PORT, () => {
          console.log(`server is running in port ${port}`)
})