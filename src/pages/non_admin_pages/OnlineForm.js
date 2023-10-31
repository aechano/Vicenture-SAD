import React, { useState } from "react";
import Banner from "../../components/Banner";
import { PATH_NAME } from "../../Variables/GLOBAL_VARIABLE";
import { NavLink } from "react-router-dom";

export default function () {
    const [email, setEmail] = useState('');
    const [fname, setfname] = useState('');
    const [midName, setmidName] = useState('');
    const [lname, setlname] = useState('');
    const [phoneNum, setphoneNum] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState('');
    const [people, setPeople] = useState('');
    const [message, setMessage] = useState('');



    return (
        <>
            <Banner bannerType="common" src={require("../../res/img/mananap_falls.png")} alt="Mananap Falls" searchBar={false} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }, { title: "Tourism" }, { title: "San Vicente Tourism", to: PATH_NAME.Tourism.SanVicente }]}>
                <p>Tourism Office Online Form</p>
            </Banner>
            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-28'>
                <div className="w-auto h-auto border b-4 border-black p-5">
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-2xl font-bold">Contact Information</h1>
                        <div className="flex flex-wrap justify-stretch">
                            <div className="relative mb-3 mx-2">
                                <input
                                    type="text"
                                    className={`peer m-0 block h-[58px] w-80 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary ${fname ? 'pb-[0.625rem] pt-[1.625rem]' : ''}`}
                                    id="fname"
                                    placeholder="First Name"
                                    value={fname}
                                    onChange={(e) => {
                                        setfname(e.target.value);
                                    }}
                                />
                                <label
                                    htmlFor="fname"
                                    className={`pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-${fname ? '-translate-y-2 translate-x-[0.15rem] scale-[0.85]' : ''} motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                                >
                                    First Name
                                </label>
                            </div>
                            <div className="relative mb-3 mx-2">
                                <input
                                    type="text"
                                    className={`peer m-0 block h-[58px] w-80 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary ${midName ? 'pb-[0.625rem] pt-[1.625rem]' : ''}`}
                                    id="midName"
                                    placeholder="Middle Name"
                                    value={midName}
                                    onChange={(e) => {
                                        setmidName(e.target.value);
                                    }}
                                />
                                <label
                                    htmlFor="minit"
                                    className={`pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-${midName ? '-translate-y-2 translate-x-[0.15rem] scale-[0.85]' : ''} motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                                >
                                    Middle Name
                                </label>
                            </div>
                            <div className="relative mb-3 mx-2">
                                <input
                                    type="text"
                                    className={`peer m-0 block h-[58px] w-80 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary ${lname ? 'pb-[0.625rem] pt-[1.625rem]' : ''}`}
                                    id="lname"
                                    placeholder="Last Name"
                                    value={lname}
                                    onChange={(e) => {
                                        setlname(e.target.value);
                                    }}
                                />
                                <label
                                    htmlFor="lname"
                                    className={`pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-${lname ? '-translate-y-2 translate-x-[0.15rem] scale-[0.85]' : ''} motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                                >
                                    Last Name
                                </label>
                            </div>
                            <div className="relative mb-3 mx-2">
                                <input
                                    type="email"
                                    className={`peer m-0 block h-[58px] w-80 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary ${email ? 'pb-[0.625rem] pt-[1.625rem]' : ''}`}
                                    id="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                                <label
                                    htmlFor="email"
                                    className={`pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-${email ? '-translate-y-2 translate-x-[0.15rem] scale-[0.85]' : ''} motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                                >
                                    Email
                                </label>
                            </div>
                            <div className="relative mb-3 mx-2">
                                <input
                                    type="text"
                                    className={`peer m-0 block h-[58px] w-80 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary ${phoneNum ? 'pb-[0.625rem] pt-[1.625rem]' : ''}`}
                                    id="phoneNum"
                                    placeholder="Phone Number"
                                    value={phoneNum}
                                    onChange={(e) => {
                                        setphoneNum(e.target.value);
                                    }}
                                />
                                <label
                                    htmlFor="phoneNum"
                                    className={`pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-${phoneNum ? '-translate-y-2 translate-x-[0.15rem] scale-[0.85]' : ''} motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                                >
                                    Phone Number
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-5">
                        <h1 className="text-2xl font-bold">Travel Details</h1>
                        <div className="flex flex-wrap justify-stretch">
                            <div className="relative mb-3 mx-2">
                                <input
                                    type="date"
                                    className={`peer m-0 block h-[58px] w-80 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary ${date ? 'pb-[0.625rem] pt-[1.625rem]' : ''}`}
                                    id="date"
                                    placeholder="Date"
                                    value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="relative mb-3 mx-2">
                                <input
                                    type="number"
                                    className={`peer m-0 block h-[58px] w-80 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary ${duration ? 'pb-[0.625rem] pt-[1.625rem]' : ''}`}
                                    id="duration"
                                    placeholder="Duration of Stay"
                                    value={duration}
                                    onChange={(e) => {
                                        setDuration(e.target.value);
                                    }}
                                />
                                <label
                                    htmlFor="duration"
                                    className={`pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-${duration ? '-translate-y-2 translate-x-[0.15rem] scale-[0.85]' : ''} motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                                >
                                    Duration of Stay
                                </label>
                            </div>
                            <div className="relative mb-3 mx-2">
                                <input
                                    type="number"
                                    className={`peer m-0 block h-[58px] w-80 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary ${people ? 'pb-[0.625rem] pt-[1.625rem]' : ''}`}
                                    id="people"
                                    placeholder="Number of People"
                                    value={people}
                                    onChange={(e) => {
                                        setPeople(e.target.value);
                                    }}
                                />
                                <label
                                    htmlFor="people"
                                    className={`pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-${people ? '-translate-y-2 translate-x-[0.15rem] scale-[0.85]' : ''} motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`}
                                >
                                    Number of people
                                </label>
                            </div>
                        </div>

                    </div>
                    <div className="relative mb-3 mx-2">
                        <textarea
                            className={`peer m-0 block h-56 w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary`}
                            id="message"
                            placeholder="Special request or requirements..."
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="pt-5 flex justify-end">
                    <NavLink to={PATH_NAME.Tourism.OnlineForm} onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                        Generate and Download Form
                    </NavLink>
                </div>
            </div>
        </>
    );
}