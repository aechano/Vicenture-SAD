import React, { useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { InputBoxAccount } from '../../components/InputBox';

export default function SignUp() {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [role, setRole] = useState();
    const [userAccount, setUserAccount] = useState();
    const [button, setButton] = useState("Create Account");
    const navigate = useNavigate();

    function evaluateAnswers(e){
        e.preventDefault();

        var validInputs = true;
        if (!String(email).toLowerCase().match('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$')) { // checks if the email input is valid
            console.log("Not a valid email.");
            validInputs = false;
        }
        if (!String(username)
            .match('^[A-Za-z0-9_]{6,}$')) { // checks if the username input is valid
            if (String(username).length < 6){
                console.log("Username needs to be 6 characters and above.")
            } else {
                console.log("Username can only contain A-Z, a-z, numbers, and underscores")
            }
            validInputs = false;
        }
        if (String(password) !== String(confirmPassword)) {
            console.log("Password does not match.")
            validInputs = false;
        }
        if (role === "" || role === null) {
            console.log("Roles are not chosen!")
            validInputs = false;
        }
        
        if (!validInputs) return;

        /*
        now that input is valid, let's store it in the database.
        kulang pa ito since need pa natin irecheck ang email through an OTP, pero okay na to for now.
        */
        if (button === "Create Account") { //if this is a citizen or tourist account
            setUserAccount({
                "email":email,
                "password":password,
                "username":username,
                "accountType":role,
                "lastActiveDate":Date.now(),
                "accountCreationDate":Date.now()
            });
            
            axios.post("http://localhost:8080/accounts", userAccount);
            window.location.href = "/";
        } else { //if this is an investor or lgu account
            var currentData = {
                email:email,
                password:password,
                username:username,
                role:role,
                lastActiveDate:Date.now(),
                accountCreationDate:Date.now()
            }
            if (role==="2") {
                navigate("/sign-up/investor", {state:currentData});
            } else {
                navigate("/sign-up/lgu", {state:currentData});
            }
        }
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
            className="absolute bottom-0 right-0 top-0 min-h-screen w-1/2 overflow-hidden bg-fixed"
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
                Sign Up
            </h1>
            <form
                className="w-full h-fit items-center justify-center"
                onSubmit={evaluateAnswers}
            >
                <InputBoxAccount
                    placeholder="Email"
                    autocomplete="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    required={true}
                    >
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </InputBoxAccount>
                <InputBoxAccount
                    placeholder="username"
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value)
                    }}
                    required={true}
                    >
                    <svg
                        width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="#9CA3AF"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                        <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/>
                        <circle cx="12" cy="10" r="3"/>
                        <circle cx="12" cy="12" r="10"/>
                    </svg>
                </InputBoxAccount>
                <InputBoxAccount
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    required={true}
                    >
                    <svg width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="#9CA3AF"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </InputBoxAccount>
                <InputBoxAccount
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                    }}
                    required={true}
                    >
                    <svg width="20" height="20"
                        viewBox="0 0 24 24" fill="none" stroke="#9CA3AF"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        >
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                </InputBoxAccount>
                <div className="flex justify-center">
                <div className="relative w-3/5 mb-6">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                        <svg
                            width="20" height="20"
                            viewBox="0 0 24 24" fill="none" stroke="#9CA3AF"
                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                    </div>
                    <select
                        value={role}
                        onChange={(e) => {
                            setRole(e.target.value);
                            setButton(e.target.value==="2"||e.target.value==="3"?"Continue":"Create Account");
                        }}
                        className="bg-white border border-white text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5"
                        required
                        >
                        <option value="" hidden>Select Role</option>
                        <option value="0">San Vicente Citizens</option>
                        <option value="1">Tourists</option>
                        <option value="2">Investors</option>
                        <option value="3">LGU San Vicente</option>
                    </select>
                </div>
            </div>
                <button
                    className="text-lgu-green bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 mt-16"
                    >
                    {button}
                </button>
            </form>
            <div className='absolute bottom-0 right-0 mr-5 mb-5 text-white'>
                Already have an account? &nbsp;
                <NavLink
                    to='/sign-in'
                    className='text-lgu-lime bold'>
                    Sign In
                </NavLink>
            </div>
        </div>
    </div>
  )
}