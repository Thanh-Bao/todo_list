import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Account, editAcc] = useState({
    Username: 55,
    Password: 5
  });
  const submitAccount = async function () {
    const abc = await fetch(
      `http://127.0.0.1:8390/Acct`
      , {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(Account)
      });
  const abc1 = await abc.json();
  }
  function getUsername(event) {
    console.log(event.target.value)
    editAcc({
      ...Account,
      Username: event.target.value
    })
  }
  function getPassword(event) {
    console.log(event.target.value)
    editAcc({
      ...Account,
      Password: event.target.value
    })
  }
  return (<div>
    <div>Username </div>
    <input onChange={getUsername} value={Account.Username} />
    <div>Password </div>
    <input onChange={getPassword} value={Account.Password} /> <br></br>
    <button onClick={submitAccount}>Submit</button>
  </div>
  );
}

export default App;