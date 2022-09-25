const express = require("express");
const app = express();

const registers =   require("form");

const port = process.env.PORT || 8080;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("registers" , async (req, res) => {
    try{
        console.log(req.body.firstname);
    }
    catch (error){
        res.status(400).send(error);
    }
})

app.listen(port, () => {
    console.log('Server is running Successfully');
})
