import login_logo from '../assets/login/login_main.png'

function Login_img (){
    return <div className=" h-full d-flex align-items-center justify-content-center">
        <img src={login_logo} alt="login logo" className='col-sm-10'/>
    </div>
}

export default Login_img;