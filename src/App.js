import { useEffect } from 'react';
import { useTelegram } from './components/hooks/useTelegram';
import Header from './components/Header/header';
import Form from './components/Form/form';
import './App.css';


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(()=>{
    tg.ready()
  },[])

  

  return (
   <div className='App'> 
      <Header/>
      <Form/>
   </div>
  );
}

export default App;
