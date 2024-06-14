import { Outlet } from 'react-router-dom';
import './auth.scss'

function AuthModule (){
    return <div className='full-container'>
        <Outlet />
    </div>
}

export default AuthModule;