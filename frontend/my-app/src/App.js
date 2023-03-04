import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react';
function Row(abcd) {
  
return ( <tr>
 <td>{abcd.studentID}</td>
  <td>{abcd.weight}</td>
  <td>Edit</td>
  <td>Delete</td>
</tr>
)  
}

function CreateTables() {
  const [myList, editMyList] = useState(
  []
  );
  useEffect(() => {
    const getStocks = async () => {
      const HOSEresponse = await fetch(
        `http://127.0.0.1:8390/learnIelts`
      );
      const stocks = await HOSEresponse.json();
      console.log(stocks);
      editMyList(stocks);
    };
  
    getStocks();  
  },[]);
  return (<div>
    <table>
    <tr>
      <th>Incompleted Tasks</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
    {myList.map( (stu) => {
      //
      //
     return <Row studentID={stu.studentID} weight={stu.weight}/>
  })}
  </table> 
  </div>
  );
  }
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

    <CreateTables/>
  </div>
  );
}
export default App;