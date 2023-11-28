import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { InputBoxAccount } from '../../../components/InputBox';
import { API, PATH_NAME, USER_TYPES } from '../../../Variables/GLOBAL_VARIABLE';
import { RxCross2 } from 'react-icons/rx'
import Cookies from 'js-cookie';

export default function SignUpInvestor() {

    const navigate = useNavigate();

    const location = useLocation();
    const data = location.state;

    useEffect(() => {
        if (data === null) navigate(PATH_NAME.Accounts.SignUp.SignUp);
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
        axios.post(API.SignUp, {
            "lastName": lastName,
            "firstName": firstName,
            "middleName": middleInitial,
            "nameExtension": nameExt,
            "businessSector": businessSector,
            "company": company,
            "email": location.state.initialData.email,
            "password": location.state.initialData.password,
            "userName": location.state.initialData.username,
            "accountType": location.state.initialData.role,
            "lastActiveDate": location.state.initialData.lastActiveDate,
            "accountCreationDate": location.state.initialData.accountCreationDate
        })
            .then((response) => response.data)
            .then(data => {
                if (data == null) {
                    console.log("Sign up failed.")
                } else {
                    Cookies.set("token", data.token, {expires: 7});
                    Cookies.set("refresh", data.refreshToken);
                    window.dispatchEvent(new Event("cookies"));
                    var goTo = Cookies.get("PREVIOUS_LINK");
                    Cookies.remove("PREVIOUS_LINK");
                    navigate(goTo !== undefined ? goTo : "/");
                }
            })
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
                        to={PATH_NAME.Accounts.SignUp.SignUp}
                        state={{initialData: location.state.initialData}}
                        className='float-left text-lgu-lime p-3 w-fit mr-0 ml-auto select-none cursor-pointer'>
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
                                to={PATH_NAME.Accounts.SignIn}
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
