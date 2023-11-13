import logo from './logo.svg';
import './App.css';

import LoginButton from './components/login'
import LogoutButton from './components/logout'
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId= "234850608613-n7u9ta3ue6lgaff0u5q2ad1c260bpote.apps.googleusercontent.com"

function App() {




   useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };


    gapi.load('client:auth2',start)
   })


  return (
    <div className="App">
   
   <LoginButton/>
   <LogoutButton/>

   <div>
    
   
   </div>
    </div>
  );
}

export default App;
