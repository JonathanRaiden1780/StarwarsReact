import { useEffect, useState } from 'react';
import NavBar from './components/nav';
import Login from './components/login';
import SignUp from './components/register';
import './app.css'
//import Customer from './screens/Customer';

function App() {
  const [user, setUser] = useState('');
  const [toggleForm, setToggleForm] =  useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }

  useEffect(() => {
    userState();
  }, []);
  return (
    <html className='app'> 
      {user !== null ? (
        <>
        <NavBar setUserState={() => setUser(null)}/>

        </>
      ) : (
         <>
         {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>) 
         : ( <SignUp toggle={() => formMode()}/>)}
        
     </>
      )} 
    </html >
   
  );
}

export default App;