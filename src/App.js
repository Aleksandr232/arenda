import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/header';
import './App.css';


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(()=>{
    tg.ready()
  },[])

  

  return (
   <div className='App'> 
      <Header/>
      
   </div>
  );
}

export default App;
