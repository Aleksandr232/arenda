import Button from '../Button/button'
import { useTelegram } from '../hooks/useTelegram';
import './header.css'

const Header = () =>{
    const { onClose, user} = useTelegram()

    
    return(
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                Добрый день {user?.username}`
            </span>
        </div>
    )
}

export default Header