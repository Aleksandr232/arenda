import { useEffect } from 'react';
import Header from './components/Header/header';
import './App.css';


function App() {
  const tg = window.Telegram.WebApp;
  
  useEffect(()=>{
    tg.ready()
  },[])

  

  return (
   <div className='App'> 
   
      
   </div>
  );
}

export default App;
