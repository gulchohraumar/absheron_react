import Login_img from "./login_img";
import logo from '../assets/login/absheron-logo.png'
import { useNavigate } from "react-router-dom";
import loginService, { setCurrentUser } from "../components/services/authService";
import { useEffect, useState } from "react";
import { validateForm } from "../components/utils";
import { swalError } from "../components/utils-components.tsx/alerts";

function Login() {
    const navigate = useNavigate();
    const [validForm, setValidForm] = useState(true);
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: ""
    })

    const login = () => {
        if (loginForm.username && loginForm.password) {
            setValidForm(true);
            loginService(loginForm, (response: any) => {
                if (response.status) {
                    navigate('/main/modules');
                    setCurrentUser(response);
                } else swalError(response.message)
            })
        }
        else {
            setValidForm(false);
        }
    }

    useEffect(() => {
        localStorage.clear();
    }, []);

    return <div className="row h-full">
        <div className="col-md-6 d-flex align-items-center justify-content-center relative">
            <div className="mx-auto col-md-7">
                <div className="row">
                    <img src={logo} alt="" className="mx-auto" style={{ width: '50%' }} />
                </div>

                <div className="row  mt-4">
                    <div className="field">
                        <label htmlFor="username" title="Login" data-title="Login"></label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={(event) => {
                                let model = { ...loginForm };
                                model.username = event.target.value;
                                setLoginForm(model);
                            }} />

                        {(!loginForm.username && !validForm) &&
                            <small className="text-danger font-medium">
                                *Required field
                            </small>
                        }
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="field">
                        <label htmlFor="password" title="Şifrə" data-title="Şifrə"></label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(event) => {
                                let model = { ...loginForm };
                                model.password = event.target.value;
                                setLoginForm(model);
                            }}
                        />
                        {(!loginForm.password && !validForm) &&
                            <small className="text-danger font-medium">
                                *Required field
                            </small>
                        }
                    </div>
                </div>

                <div className="row px-1">
                    <div className="col-md-6">
                        <input type="checkbox" name="save_psw" id="save_psw" /> Yadda saxla
                    </div>
                    <div className="col-md-6 text-end text-blue-400">
                        <button>Şifrəni unutmuşam</button>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-lg-12">
                        <button className=" confirm_btn" onClick={login} >
                            Daxil ol
                        </button>
                    </div>

                    <div className="col-lg-12 mt-3">
                        <button className=" back_btn" >
                            Qeydiyyatsız sorğu
                        </button>
                    </div>
                </div>

            </div>

            <div className="absolute text-center bottom-3 ">
                Powered By UNISER Group <br />
                ABSHERON © Copyright 2023
            </div>
        </div>


        <div className="col-md-6">
            <Login_img />
        </div>

    </div>
}

export default Login;