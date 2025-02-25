const express = require("express");
const app = express();
const PORT = 4000;

const userRoute = require('./src/routes/userRoute')

// Use the router for all routes starting with '/'
app.use('/', userRoute);

app.listen(PORT, () => {
    console.log(`server running http://localhost:4000`);
});
