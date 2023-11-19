import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { InputBoxAccount } from '../../../components/InputBox';
import { API, PATH_NAME, USER_TYPES } from '../../../Variables/GLOBAL_VARIABLE';
import { RxCross2 } from 'react-icons/rx'

export default function SignUpLGU({ previousPage, state }) {

    const navigate = useNavigate();

    const location = useLocation();
    const data = location.state;

    useEffect(() => {
        if (data === null) navigate(PATH_NAME.Accounts.SignUp.SignUp);
        else console.log(data);
    }, []);

    const [firstName, setFirstName] = useState();
    const [middleInitial, setMiddleInitial] = useState();
    const [lastName, setLastName] = useState();
    const [nameExt, setNameExt] = useState();
    const [businessSector, setBusinessSector] = useState();
    const [company, setCompany] = useState();

    function evaluateAnswers(e) {
        e.preventDefault();

        /*check if input is valid*/

        /*
        now that input is valid, let's store it in the database.
        kulang pa ito since need pa natin irecheck ang email through an OTP, pero okay na to for now.
        */
        /*
        axios.post(API.SignUp, {
            "lastName": lastName,
            "firstName": firstName,
            "middleName": middleInitial,
            "nameExtension": nameExt,
            "businessSector": businessSector,
            "company": company,
            "accounts": {
                "email": state.email,
                "password": state.password,
                "username": state.username,
                "accountType": state.role,
                "lastActiveDate": state.lastActiveDate,
                "accountCreationDate": state.accountCreationDate
            }
        });
        */

        localStorage.setItem("accountType", USER_TYPES.Investor)
        localStorage.setItem("username", data.username)
        localStorage.setItem("email", data.email)
        window.dispatchEvent(new Event("storage"));
        var goTo = localStorage.getItem("PREVIOUS_LINK");
        localStorage.setItem("PREVIOUS_LINK", "/");
        navigate(goTo!==undefined?goTo:"/");
    }
    return (
        <section className="bg-gray-900 p-32" style={{ backgroundImage: "url(" + require('../../../res/img/try.jpg') + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom 0%", }}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="#" className="flex flex-col items-center mb-6 text-2xl font-semibold text-white">
                    <img className="w-20 h-20 mr-2" src={require("../../../res/img/logo.png")} alt="logo" />
                    <span className='pt-3'>SAN VICENTE, CAMARINES NORTE</span>
                </a>
                <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-lgu-green border-gray-700">
                    <NavLink
                        to={PATH_NAME.Home}
                        className='float-right text-lgu-lime p-3 w-fit mr-0 ml-auto'>
                        <RxCross2 />
                    </NavLink>
                    <NavLink
                        to={{
                            pathname: PATH_NAME.Accounts.SignUp.SignUp,
                            state: { previousPage: previousPage, initialData:state }
                        }}
                        className='float-left text-lgu-lime p-3 w-fit mr-0 ml-auto'>
                        Back
                    </NavLink>
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl text-center font-semibold leading-tight tracking-tight  md:text-2xl text-white pt-5">
                            Investor Account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={evaluateAnswers}>
                            <InputBoxAccount
                                placeholder="First Name"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value)
                                }}
                                required={true}
                                marginBottom="-mb-3"
                            />
                            <div className='flex justify-center'>
                                <div className='relative w-4/5 -mb-3'>
                                    <div className="w-1/2 float-left">
                                        <input
                                            type="text"
                                            className="bg-white border border-white text-black text-sm rounded-sm focus:ring-green-500 focus:border-green-500 block w-full p-4"
                                            placeholder="Middle Initial"
                                            value={middleInitial}
                                            onChange={(e) => {
                                                setMiddleInitial(e.target.value)
                                            }} />
                                    </div>
                                    <div className="w-1/2 ml-0 float-right pl-1">
                                        <input
                                            type="text"
                                            className="bg-white border border-white text-black text-sm rounded-sm focus:ring-green-500 focus:border-green-500 block w-full p-4"
                                            placeholder="Name Extension"
                                            value={nameExt}
                                            onChange={(e) => {
                                                setNameExt(e.target.value)
                                            }} />
                                    </div>
                                </div>
                            </div>
                            <InputBoxAccount
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value)
                                }}
                                required={true}
                                marginBottom="-mb-3"
                            />
                            <InputBoxAccount
                                placeholder="Business Sector"
                                value={businessSector}
                                onChange={(e) => {
                                    setBusinessSector(e.target.value)
                                }}
                                required={true}
                                marginBottom="-mb-3"
                            />
                            <InputBoxAccount
                                placeholder="Company"
                                value={company}
                                onChange={(e) => {
                                    setCompany(e.target.value)
                                }}
                                required={true}
                                marginBottom="-mb-3"
                            />
                            <div class="flex items-start justify-center">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button
                                    className="text-lgu-green bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-8 py-2.5 mr-2 mb-2 "
                                >
                                    Create Account
                                </button>
                            </div>
                        </form>
                        <div className='text-center mr-5 mb-5 text-white'>
                            Already have an account? &nbsp;
                            <NavLink
                                to={{
                                    pathname: PATH_NAME.Accounts.SignIn,
                                    state: { previousPage: previousPage }
                                }}
                                className='text-lgu-lime bold'>
                                Sign In
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
