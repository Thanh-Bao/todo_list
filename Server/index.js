import express from 'express';
import cors from 'cors';
const myServer = express(); // call function 
myServer.listen(8390)  // call function 
myServer.use(cors()); // call function
const homeHandler = (req, res) => {
res.send("hello")    // call function
}
const accHandler = function (req, res) {
    console.log(req); //
res.send("bye") // call function    

}
myServer.post('/Home', homeHandler) //invoke function 
myServer.post('/Acct', accHandler) //invoke function 
