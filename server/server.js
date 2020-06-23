const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001
//const axios = require('axios')

app.use(bodyParser.json());
app.use('/api', (req, res) => res.json(
    
    {returnCode:'0000',errorMessage:'message'},
    ));

app.listen(port, () => {
    console.log(`express is running on ${port}`);
})