import { useState, useEffect, useCallback } from 'react'
import { useTelegram } from '../hooks/useTelegram';
import './form.css'


const Form=()=>{
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [subject, setSubject] = useState('vshki')
    const {tg} = useTelegram()

    const onSendData = useCallback(()=>{
        const data ={
            name,
            surname,
            subject
        }
        tg.sendData(JSON.stringify(data))
    },[])

    useEffect(()=>{
        tg.onEvent('mainButtonClicked', onSendData)
        return () =>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    },[])

    useEffect(()=>{
        tg.MainButton.setParams({
            text: 'Отправить заявку'
        })
    },[])

    useEffect(()=>{
        if(!name || !surname){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }
    },[name, surname])

    const onChangeName = (e) =>{
        setName(e.target.value)
    }

    const onChangeSurname = (e) =>{
        setSurname(e.target.value)
    }

    const onChangeSubject= (e) =>{
        setSubject(e.target.value)
    }

    return(
        <div className='form'>
            <h3>Введите ваши данные</h3>
            <input 
            className='input'
            type="text" 
            placeholder='Имя'
            value={name}
            onChange={onChangeName}
            />
            <input 
            className='input'
            type="text" 
            placeholder='Фамилия'
            value={surname}
            onChange={onChangeSurname}
            />
            <select value={subject} onChange={onChangeSubject} className='select'>
                <option value="vshki">Вышки-туры</option>
                <option value="mini">Минитрактор</option>
                <option value="stroi">Строительные леса</option>
                <option value="uborka">Уборка снега с крыш</option>
                <option value="gruz">Грузоперевозки</option>
            </select>
        </div>
    )
}

export default Form