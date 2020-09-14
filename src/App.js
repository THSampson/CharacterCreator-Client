import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';
import Auth from './components/Auth/Auth';
import CharaIndex from './components/characterFunctionality/CharaIndex';



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
    return (sessionToken === localStorage.getItem('token') ? <CharaIndex token={sessionToken} /> 
    : <Auth updateToken={updateToken}/>)

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
