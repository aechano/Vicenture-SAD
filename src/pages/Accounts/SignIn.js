import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

export default function SignIn() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userAccount, setUserAccount] = useState();
    const navigate = useNavigate();

    function checkCredentials(e){
        e.preventDefault();
        const promise = axios.get("http://localhost:8080/accounts/"+email);
        const dataPromise = promise.then((response) => response.data)
        dataPromise.then(data => {
            if (data == null){
                console.log("Sign in failed: Email not found.")
            } else {
                if (data.password === password){
                    console.log("Sign in success!");
                    data.lastActiveDate = Date.now();
                    console.log(Date.now());
                    setUserAccount(data);
                    console.log(userAccount);
                    axios.post("http://localhost:8080/accounts", data);
                    window.location.href = "/";
                } else {
                    console.log("Sign in failed: Password does not match.");
                }
            }
        })
    }
  return (
    <div
        className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
        style={{
            backgroundImage: "url("+require('./../../res/img/account_signing_bg.png')+")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center bottom 0%",
            height: "100vh",
        }}
        >
        <div
            className="absolute bottom-0 right-0 top-0 h-full w-1/2 overflow-hidden bg-fixed"
            style={{
                backgroundColor: "#2D5F2ECC"
            }}>
            <a
                href='/'
                className='float-right text-lgu-lime p-5 w-fit mr-0 ml-auto'>
                    Not Now
            </a>
            <h1
                className='text-white w-full my-20'
                >
                Sign In
            </h1>
            <form
                className="w-full h-fit items-center justify-center"
                onSubmit={checkCredentials}
            >
                <div className='flex justify-center'>
                    <div className="relative w-3/5 mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                            </svg>
                        </div>
                        <input
                            type="text"
                            id="account-email"
                            className="bg-white border border-white text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5"
                            placeholder="Email"
                            autocomplete='email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <div className="relative w-3/5 mb-6">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                                <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z"/>
                                <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </div>
                        <input
                            type="password"
                            id="account-email"
                            className="bg-white border border-white text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5"
                            placeholder="Password"
                            autocomplete='password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}/>
                    </div>
                </div>
                <button
                    className="text-lgu-green bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 mt-28"
                    >
                    Sign In
                </button>
            </form>
            <div className='absolute bottom-0 right-0 mr-5 mb-5 text-white'>
                Don't have an account? &nbsp;
                <NavLink
                    to='/sign-up'
                    className='text-lgu-lime bold'>
                    Sign Up
                </NavLink>
            </div>
        </div>
    </div>
  )
}
