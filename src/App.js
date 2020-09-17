import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Auth from './components/Auth/Auth';
import CharaIndex from './components/characterFunctionality/CharaIndex';
import Sidebar from './components/Navbar/Sidebar';
import Navbar from './components/Navbar/Navbar'

function App() {
  const [sessionToken, setSessionToken] = useState('');

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  } 
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setSessionToken(localStorage.getItem('token'))
    }
  }, []);
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  };

 
  const viewToggle = () => {
    return (sessionToken === localStorage.getItem('token') ? <Sidebar token={sessionToken} setSessionToken={setSessionToken}/> 
    : <Auth updateToken={updateToken}/>)
  }

  return (
    <div className="App">
      <h1>Character Cache</h1>
      <p>A place to store characters for your next roleplay, novel, or whatever you may need.</p>
      <div>
        {viewToggle()}
       </div>
    </div>
  );
}

export default App;
