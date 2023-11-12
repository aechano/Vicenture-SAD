import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import { InputBoxAccount } from '../../components/InputBox';
import { API, PATH_NAME } from '../../Variables/GLOBAL_VARIABLE';
import { jwtDecode } from 'jwt-decode';

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userAccount, setUserAccount] = useState();
    const navigate = useNavigate();

    function checkCredentials(e) {
        e.preventDefault();
        axios.post(API.SignIn, { "email": email, "password": password })
            .then((response) => response.data)
            .then(data => {
                if (data == null) {
                    console.log("Sign in failed.")
                } else {
                    localStorage.setItem("token", data.token)
                    localStorage.setItem("refresh", data.refreshToken)
                    console.log(jwtDecode(data.token))
                }
            })
    }
    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
            style={{
                backgroundImage: "url(" + require('./../../res/img/try.jpg') + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom 0%",
                height: "100vh",
            }}
        >
            <div
                className="absolute bottom-0  right-0 top-0  w-full md:w-1/2 overflow-hidden bg-fixed bg-opacity-60 backdrop-filter backdrop-blur-md h-full mx-auto" style={{backgroundColor: "rgba(45, 95, 46, 0.6)"}}
                >
                <NavLink
                    to={PATH_NAME.Home}
                    className='float-right text-lgu-lime p-5 w-fit mr-0 ml-auto'>
                    Not Now
                </NavLink>

                <div className='md:pt-16'>
                    <div className=' h-28 w-28 mx-auto'>
                        <img className='' src={require("../../res/img/logo.png")} />
                    </div>
                    <div>
                        <h1 className='text-xl text-center font-bold text-white pt-2'>SAN VICENTE, CAMARINES NORTE</h1>
                    </div>
                    <div>
                        <p className='text-lgu-lime italic text-sm'>The Town of Discovery and
                            Adventure</p>
                    </div>
                </div>


                <h1
                    className='text-white w-full my-7 text-xl font-semibold pt-2'
                >
                    Sign In
                </h1>
                <form
                    className="w-full h-fit items-center justify-center"
                    onSubmit={checkCredentials}
                >
                    <InputBoxAccount
                        type="email"
                        placeholder="Email"
                        autocomplete="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    >
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                    </InputBoxAccount>
                    <InputBoxAccount
                        type="password"
                        placeholder="Password"
                        autocomplete="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    >
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                            <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                            <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                    </InputBoxAccount>
                    <button
                        className="text-lgu-green bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-8 py-2.5 mr-2 mb-2 mt-2"
                    >
                        Sign In
                    </button>
                </form>
                <div className='absolute bottom-0 right-0 mr-5 mb-5 text-white'>
                    Don't have an account? &nbsp;
                    <NavLink
                        to={PATH_NAME.Accounts.SignUp.SignUp}
                        className='text-lgu-lime bold'>
                        Sign Up
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
