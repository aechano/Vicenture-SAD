import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { InputBoxAccount } from '../../../components/InputBox';

export default function SignUpLGU() {

    const navigate = useNavigate();

    const location = useLocation();
    const data = location.state;

    useEffect(() => {
        if (data === null) navigate("/sign-up");
        else console.log(data);
    }, []);

    const [firstName, setFirstName] = useState();
    const [middleInitial, setMiddleInitial] = useState();
    const [lastName, setLastName] = useState();
    const [nameExt, setNameExt] = useState();
    const [office, setOffice] = useState();
    const [position, setPosition] = useState();

    function evaluateAnswers(e){
        e.preventDefault();
        
        /*check if input is valid*/

        /*
        now that input is valid, let's store it in the database.
        kulang pa ito since need pa natin irecheck ang email through an OTP, pero okay na to for now.
        */
            
        axios.post("http://localhost:8080/accounts/lgu", {
            "lastName":lastName,
            "firstName":firstName,
            "middleName":middleInitial,
            "nameExtension":nameExt,
            "office":office,
            "position":position,
            "accounts" : {
                "email":data.email,
                "password":data.password,
                "username":data.username,
                "accountType":data.role,
                "lastActiveDate":data.lastActiveDate,
                "accountCreationDate":data.accountCreationDate
            }
        });
        window.location.href = "/";
    }
    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
            style={{
                backgroundImage: "url("+require('./../../../res/img/account_signing_bg.png')+")",
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
                <NavLink
                    to='/sign-up'
                    className='float-left text-lgu-lime p-5 w-fit mr-0 ml-auto'>
                        Back
                </NavLink>
                <h1
                    className='text-white w-full my-20'
                    >
                    LGU Account
                </h1>
                <form
                    className="w-full h-fit items-center justify-center"
                    onSubmit={evaluateAnswers}
                    >
                    <InputBoxAccount
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value)
                        }}
                        required={true}
                    />
                    <div className='flex justify-center'>
                        <div className='relative w-3/5 mb-6'>
                            <div className="w-2/5 float-left">
                                <input
                                    type="text"
                                    className="bg-white border border-white text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    placeholder="Middle Initial"
                                    value={middleInitial}
                                    onChange={(e) => {
                                        setMiddleInitial(e.target.value)
                                    }}/>
                            </div>
                            <div className="w-3/5 ml-0 float-right pl-5">
                                <input
                                    type="text"
                                    className="bg-white border border-white text-black text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                                    placeholder="Name Extension"
                                    value={nameExt}
                                    onChange={(e) => {
                                        setNameExt(e.target.value)
                                    }}/>
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
                    />
                    <InputBoxAccount
                        placeholder="Office"
                        value={office}
                        onChange={(e) => {
                            setOffice(e.target.value)
                        }}
                        required={true}
                    />
                    <InputBoxAccount
                        placeholder="Position"
                        value={position}
                        onChange={(e) => {
                            setPosition(e.target.value)
                        }}
                        required={true}
                    />
                    <button
                        className="text-lgu-green bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 mt-16"
                        >
                        Create Account
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
