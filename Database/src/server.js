const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 8080;

app.use(express.json);

app.listen(PORT, (req, res)=>{
    console.log(`The server is running on the port ${PORT}`);
})