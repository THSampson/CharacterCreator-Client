import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Auth from './components/Auth/Auth';

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);

  useEffect(() => console.log('session token has changed'), [sessionToken])

  const viewToggle = () => {
    return sessionToken ? <h1>You got a session token!</h1> : <Auth setSessionToken={setSessionToken}/>
  }
  return (
    <div className="App">
      <div className="mainDiv">
        {viewToggle()}
      </div>
    </div>
  );
}

export default App;
