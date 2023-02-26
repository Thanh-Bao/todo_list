import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [Account, editAcc] = useState({
    Username: 55,
    Password: 5
  });
  const submitAccount = function (){
    alert("User added successfully!"); 
  
  }
  function getUsername(event) {
    console.log(Account.Username)
    }
  return (<div>
    <div>Username </div>
    <input onChange={getUsername}/> 
    <div>Password </div>
    <input value={Account.Password} /> <br></br>
    <button onClick={submitAccount}>Submit</button>
  </div>
  );
}

export default App;