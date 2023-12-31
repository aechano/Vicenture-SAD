import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { InputBoxAccount } from '../../components/InputBox';
import { API, PATH_NAME } from '../../Variables/GLOBAL_VARIABLE';
import { RxCross2 } from "react-icons/rx";
import { IoMdEye, IoMdEyeOff } from 'react-icons/io'; // Import eye icons from react-icons/io
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export default function SignUp() {
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.initialData ? location.state.initialData.email : null);
    const [username, setUsername] = useState(location.state?.initialData ? location.state.initialData.username : null);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); //for confirm password
    const [role, setRole] = useState(location.state?.initialData ? location.state.initialData.role : null);
    const [button, setButton] = useState(location.state?.initialData ? location.state.initialData.role === "2" ? 'Continue' : 'Create Account' : 'Create Account');
    const navigate = useNavigate();

    const [emailError, setEmailError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [roleError, setRoleError] = useState('');
    const [showErrors, setShowErrors] = useState(false);

    function evaluateAnswers(e) {
        e.preventDefault();

        setEmailError('');
        setUsernameError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setRoleError('');


        var validInputs = true;
        if (!String(email).toLowerCase().match('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$')) { // checks if the email input is valid
            setEmailError('Not a valid email.');
            validInputs = false;
        }
        if (!String(username)
            .match('^[A-Za-z0-9_]{6,}$')) { // checks if the username input is valid
            if (String(username).length < 6) {
                setUsernameError("Username needs to be 6 characters and above.")
            } else {
                setUsernameError("Username can only contain A-Z, a-z, numbers, and underscores")
            }
            validInputs = false;
        }
        if (String(password) !== String(confirmPassword)) {
            setPasswordError("Password does not match.")
            validInputs = false;
        }
        if (role === "" || role === null) {
            setRoleError("Roles are not chosen!")
            validInputs = false;
        }

        if (!validInputs) {
            setShowErrors(true);
            setTimeout(() => {
                setShowErrors(false);
            }, 10000); // Hide errors after 10 seconds
        }

        if (!validInputs) return;


        /*
        now that input is valid, let's store it in the database.
        kulang pa ito since need pa natin irecheck ang email through an OTP, pero okay na to for now.
        */

        if (button === "Create Account") { //if this is a citizen or tourist account

            axios.post(API.SignUp, {
                "email": email,
                "password": password,
                "userName": username,
                "accountType": role,
                "lastActiveDate": Date.now(),
                "accountCreationDate": Date.now()
            })
                .then((response) => response.data)
                .then(data => {
                    if (data == null) {
                        console.log("Sign up failed.")
                    } else {
                        // get token data
                        var tokenPayload = jwtDecode(data.token);
                        var rTokenPayload = jwtDecode(data.refreshToken);
                        
                        // calculate for expiration duration (days)
                        var tokenExp = (tokenPayload.exp - tokenPayload.iat) / (60 * 60 * 24);
                        var rTokenExp = (rTokenPayload.exp - rTokenPayload.iat) / (60 * 60 * 24);
    
                        // save to cookies with set expiration dates
                        Cookies.set("token", data.token, { expires: tokenExp });
                        Cookies.set("refresh", data.refreshToken, { expires: rTokenExp });
                        window.dispatchEvent(new Event("cookies"));
                        var goTo = Cookies.get("PREVIOUS_LINK");
                        Cookies.remove("PREVIOUS_LINK");
                        navigate(goTo !== undefined ? goTo : "/");
                    }
                })
        } else { //if this is an investor or lgu account
            navigate(PATH_NAME.Accounts.SignUp.INVESTOR, {
                state: {
                    initialData: {
                        email: email,
                        password: password,
                        username: username,
                        role: role,
                        lastActiveDate: Date.now(),
                        accountCreationDate: Date.now()
                    }
                }
            });
        }
    }

    useEffect(() => {
        // Clean up errors when the component unmounts
        return () => {
            setShowErrors(false);
        };
    }, []);

    return (
        <section className="bg-gray-900 md:p-20" style={{ backgroundImage: "url(" + require('../../res/img/try.jpg') + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom 0%", }}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <NavLink to={PATH_NAME.Home} className="flex flex-col items-center mb-6 text-2xl font-semibold text-white">
                    <img className="w-20 h-20 mr-2" src={require("../../res/img/logo.png")} alt="logo" />
                    <span className='md:pt-3 text-center'>SAN VICENTE CAMARINES NORTE</span>
                </NavLink>
                <div className="w-full  rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-lgu-green border-gray-700">
                    <div className="p-2 space-y-4 md:space-y-6 sm:p-4">
                        <NavLink
                            to={PATH_NAME.Home}
                            className='float-right text-lgu-lime  mr-0 text-right'>
                            <RxCross2 />
                        </NavLink>
                        <h1 className="text-xl font-semibold text-center leading-tight tracking-tight  md:text-2xl text-white">
                            Create an account
                        </h1>
                        <form className="space-y-2 md:space-y-6 max-w-md mx-auto" onSubmit={evaluateAnswers}>
                            {showErrors && (
                                <>
                                    {emailError && <div className="text-center text-red-600">{emailError}</div>}
                                    {usernameError && <div className="text-center text-red-600">{usernameError}</div>}
                                    {passwordError && <div className="text-center text-red-600">{passwordError}</div>}
                                    {confirmPasswordError && <div className="text-center text-red-600">{confirmPasswordError}</div>}
                                    {roleError && <div className="text-center text-red-600">{roleError}</div>}
                                </>
                            )}
                            <InputBoxAccount
                                placeholder="Username"
                                value={username}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                                required={true}
                                marginBottom="-mb-1"
                            >
                                <svg
                                    width="20" height="20"
                                    viewBox="0 0 24 24" fill="none" stroke="#9CA3AF"
                                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                >
                                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                                    <circle cx="12" cy="10" r="3" />
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </InputBoxAccount>
                            <InputBoxAccount
                                type="email"
                                placeholder="Email"
                                autocomplete="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                required={true}
                                marginBottom="-mb-1"
                            >
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </InputBoxAccount>

                            <div className='relative mt-3'>
                                <InputBoxAccount
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required={true}
                                    marginBottom="-mb-1"
                                >
                                    <svg width="20" height="20"
                                        viewBox="0 0 24 24" fill="none" stroke="#9CA3AF"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </InputBoxAccount>
                                <div className="absolute right-14 top-7 transform -translate-y-1/2 cursor-pointer">
                                    {showPassword ? (
                                        <IoMdEyeOff
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        />
                                    ) : (
                                        <IoMdEye
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className='relative mt-3'>
                                <InputBoxAccount
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    placeholder="Confirm Password"
                                    autoComplete="current-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required={true}
                                    marginBottom="-mb-1"
                                >
                                    <svg width="20" height="20"
                                        viewBox="0 0 24 24" fill="none" stroke="#9CA3AF"
                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    >
                                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                    </svg>
                                </InputBoxAccount>
                                <div className="absolute right-14 top-7 transform -translate-y-1/2 cursor-pointer">
                                    {showConfirmPassword ? (
                                        <IoMdEyeOff
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        />
                                    ) : (
                                        <IoMdEye
                                            className="w-4 h-4 text-gray-500 dark:text-gray-400 cursor-pointer"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <div className={"relative w-full md:w-4/5 mb-6 "}>
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                                        <svg
                                            width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="#9CA3AF"
                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    <select
                                        value={role}
                                        onChange={(e) => {
                                            setRole(e.target.value);
                                            setButton(e.target.value === '2' ? 'Continue' : 'Create Account');
                                        }}
                                        className={`bg-white border border-white text-black text-sm rounded-sm focus:ring-green-500 focus:border-green-500 block w-full p-4 pl-10 sm:w-full`}
                                        required
                                        style={{ width: '100%'}}
                                    >
                                        <option value="" hidden>Select Role</option>
                                        <option value="0">San Vicente Citizens</option>
                                        <option value="1">Tourists</option>
                                        <option value="2">Investors</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col items-start justify-center pl-12 space-y-2">
                                <div className='flex'>
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">
                                            I've given consent for my information to be utilized for analytical purposes.
                                        </label>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="terms" className="font-light text-gray-500 dark:text-gray-300">
                                            I consented my data to be collected
                                        </label>
                                    </div>
                                </div>
                                <div className='flex'>
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                            I have already reviewed the{' '}
                                            <NavLink to={PATH_NAME.PrivacyPolicy} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                                Privacy Policy
                                            </NavLink>
                                        </label>

                                    </div>
                                </div>

                            </div>

                            <div className='flex justify-center'>
                                <button
                                    className="text-lgu-green bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-8 py-2.5 mr-2 mb-2"
                                >
                                    {button}
                                </button>

                            </div>

                        </form>
                        <div className='text-center text-white'>
                            Already have an account? &nbsp;
                            <NavLink
                                to={PATH_NAME.Accounts.SignIn}
                                className='text-lgu-lime bold'>
                                Sign In
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
