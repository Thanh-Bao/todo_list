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
const learnIeltsHandler = function (req, res) {
    console.log(req); //
res.send([
    {
      "studentID": 111,
      "weight": 85,
      "height": 170
    },
    {
      "studentID": 122,
      "weight": 65,
      "height": 150
    },
    {
      "studentID": 133,
      "weight": 120,
      "height": 182
    }
  ]) // call function    
}
myServer.post('/Home', homeHandler) //invoke function 
myServer.post('/Acct', accHandler) //invoke function 
myServer.get('/learnIelts', learnIeltsHandler) // invoke function 
