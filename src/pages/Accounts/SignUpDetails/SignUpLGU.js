import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import { InputBoxAccount } from '../../../components/InputBox';
import { API, PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';


export default function SignUpLGU() {

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
    const [empId, setEmpId] = useState();
    const [nameExt, setNameExt] = useState();
    const [office, setOffice] = useState();
    const [position, setPosition] = useState();

    function evaluateAnswers(e) {
        e.preventDefault();

        /*check if input is valid*/

        /*
        now that input is valid, let's store it in the database.
        kulang pa ito since need pa natin irecheck ang email through an OTP, pero okay na to for now.
        */

        axios.post(API.SignUp.LGU, {
            "lastName": lastName,
            "firstName": firstName,
            "middleName": middleInitial,
            "nameExtension": nameExt,
            "office": office,
            "position": position,
            "accounts": {
                "email": data.email,
                "password": data.password,
                "username": data.username,
                "accountType": data.role,
                "lastActiveDate": data.lastActiveDate,
                "accountCreationDate": data.accountCreationDate
            }
        });
        navigate(PATH_NAME.Home);
    }
    return (
        <div
            className="relative overflow-hidden bg-cover bg-no-repeat p-12 text-center"
            style={{
                backgroundImage: "url(" + require('./../../../res/img/try.jpg') + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center bottom 0%",
                height: "100vh",
            }}
        >
            <div
                className="absolute bottom-10 right-8 top-10 min-h-screen rounded-3xl w-1/2 overflow-hidden bg-fixed"
                style={{
                    backgroundColor: "rgba(45, 95, 46, 0.6)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    border: "none", // Add this line to remove the border
                    outline: "none", // Add this line to remove the outline
                    height: "95%", // Adjust this value to control the height
                    margin: "auto", // Center the div horizontally
                }}>
                <NavLink
                    to={PATH_NAME.Home}
                    className='float-right text-lgu-lime p-5 w-fit mr-0 ml-auto'>
                    Not Now
                </NavLink>
                <NavLink
                    to={PATH_NAME.Accounts.SignUp.SignUp}
                    className='float-left text-lgu-lime p-5 w-fit mr-0 ml-auto'>
                    Back
                </NavLink>

                <div className='pt-16'>
                    <div className=' h-36 w-36 mx-auto'>
                        <img className='' src={require("../../../res/img/logo.png")} />
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
                    className='text-white w-full my-7 text-3xl font-semibold pt-2'
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
                                    className="bg-white border border-white text-black text-sm rounded-sm focus:ring-green-500 focus:border-green-500 block w-full p-4"
                                    placeholder="Middle Initial"
                                    value={middleInitial}
                                    onChange={(e) => {
                                        setMiddleInitial(e.target.value)
                                    }} />
                            </div>
                            <div className="w-3/5 ml-0 float-right pl-5">
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
                    />
                    <InputBoxAccount
                        placeholder="Employee ID"
                        value={empId}
                        onChange={(e) => {
                            setEmpId(e.target.value)
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
                        className="text-lgu-green bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-sm px-8 py-2.5 mr-2 mb-2 mt-4"
                    >
                        Create Account
                    </button>
                </form>
                <div className='absolute bottom-0 right-0 mr-5 mb-5 text-white'>
                    Already have an account? &nbsp;
                    <NavLink
                        to={PATH_NAME.Accounts.SignIn}
                        className='text-lgu-lime bold'>
                        Sign In
                    </NavLink>
                </div>
            </div>
        </div >
    )
}
