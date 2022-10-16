import { useTelegram } from '../hooks/useTelegram';
import './button.css'


const Button=()=>{
    const {onClose} = useTelegram();

    return(
        <button className='button' onClick={onClose}>Закрыть</button>
    )
}

export default Button