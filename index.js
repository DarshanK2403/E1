const express = require("express");
const app = express();
const PORT = 4000;

app.get('/', (req, res) =>{
    res.send("Welcome")
});

app.listen(PORT, () => {
    console.log(`server running http://localhost:4000`)
})
