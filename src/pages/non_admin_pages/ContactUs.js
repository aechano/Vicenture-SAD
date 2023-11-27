import React, { useState } from 'react';
import Banner from '../../components/Banner';
import { PATH_NAME, USER_TYPES } from '../../Variables/GLOBAL_VARIABLE';
import AccordionItem from '../../components/AccordionItem';
import { IoLocation } from 'react-icons/io5';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdFacebook } from 'react-icons/md';
import BackToTop from '../../components/BackToTop';



export default function ContactUs({ userType }) {

    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    }

    var contacts = [
        {
            key: 1,
            offices: "Municipal Treasurer's Office",
            head: "MR. ALEX D. ESTACION",
            email: "alex_estacion@yahoo.com",
            number: "0926-630-9145",
            location: "G/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 2,
            offices: "Business Permit and Licensing Office",
            head: "MR. ROLANDO Z. PARRO JR.",
            email: "ebplssanvicente@gmail.com",
            number: "0956-913-0388",
            location: "2/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 3,
            offices: "Municipal Assessor's Office",
            head: "MR. AMABLE O. VILLAGRACIA JR.",
            email: "svcnmunicipalassesor@gmail.com",
            number: "0999-991-0966",
            location: "G/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 4,
            offices: "Municipal Agriculture Office",
            head: "ENGR. DOMINGO B. BALOLOY",
            email: "teresamago@yahoo.com",
            number: "0907-715-9072 / 0947-990-5925",
            location: "G/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 5,
            offices: "Municipal Accounting Office",
            head: "LYNDON G. TIMPUG",
            email: "marfulgencio143@gmail.com",
            number: "0909-669-6016",
            location: "2/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 6,
            offices: "Municipal Social Welfare & Development Office",
            head: "MS. KAREN V. VILLAMOR",
            email: "mswdo.sanvicente@gmail.com",
            number: "0000-000-0000",
            location: "G/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 7,
            offices: "Municipal Civil Registry Office",
            head: "MS. ANACORITA D. LITANA",
            email: "mcrosanvicentecamarinesnorte@gmail.com",
            number: "0910-185-9099",
            location: "G/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 8,
            offices: "Municipal Planning & Development Office",
            head: "ENGR. GIL Y. MIGUEL",
            email: "gilmiguel91@yahoo.com",
            number: "0939-938-9128",
            location: "2/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 9,
            offices: "Municipal Health Office",
            head: "N/A",
            email: "Mho.sanvicente4609@gmail.com",
            number: "0000-000-0000",
            location: "Brgy. Silangan, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 10,
            offices: "Municipal Engineering Office",
            head: "ENGR. CLARENCE L. MAGO",
            email: "engr.clarencemago@gmail.com",
            number: "0912-384-4086",
            location: "Settlement Site, Brgy. Man-ogob, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 11,
            offices: "Human Resource Management Office",
            head: "MR. ALEJO S. AGOT  ",
            email: "sagotalejo@gmail.com",
            number: "0910-349-9490",
            location: "2/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 12,
            offices: "Municipal Disaster Risk Reduction and Management Office (MDRRMO)",
            head: "MR. RUSTAN JAY P. ROBLES",
            email: "mdrrmosvcn@gmail.com",
            number: "0910-228-0648 / 0956-172-8482",
            location: "2/F, MDRRMO Building, SV Agro-Cultural and Sports Complex, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 13,
            offices: "Municipal Environment and Natural Resources Office (MENRO)",
            head: "MR. BLASITO A. DEL MONTE",
            email: "lgusanvicente4609@gmail.com",
            number: "0947-570-3958 / 0907-041-8513",
            location: "Menro Office, SV Agro-Cultural and Sports Complex, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V - Bicol [/su_spoiler",
            subitems: [
                {
                    key: 14,
                    offices: "Municipal Traffic & Public Safety Office",
                    head: "MR. NOLI F. BERNALDEZ",
                    email: "lgusanvicente@gmail.com",
                    number: "09085365963",
                    location: "G/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V - Bicol",
                },
            ],
        },
        {
            key: 15,
            offices: "San Vicente Tourism Office",
            head: "MS. CINDY Y. TALDO",
            email: "lgusanvicente@gmail.com",
            number: "0950-465-1240",
            location: "G/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V - Bicol",
        },
        {
            key: 16,
            offices: "Mayor's Office",
            head: "N/A",
            email: "N/A",
            number: "0998-547-0485",
            location: "2/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 17,
            offices: "Vice-Mayor's Office",
            head: "N/A",
            email: "N/A",
            number: "0000-000-000",
            location: "2/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 18,
            offices: "Sangguniang Bayan Office",
            head: "N/A",
            email: "sbsanvicente4609@gmail.com",
            number: "0939-911-0503",
            location: "2/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
        {
            key: 19,
            offices: "Municipal Traffic and Public Safety Office",
            head: "Noli F. Bernaldez",
            email: "sanvicentemtpso@gmail.com",
            number: "0985-403-2655",
            location: "2/F, Municipal Hall, F. Zaño St., Brgy. Kanluran, San Vicente, Camarines Norte, Region V – Bicol",
        },
    ];

    return (
        <>
            <Banner bannerType="common" src={require("../../res/img/LGU-PERS.jpg")} alt="LGU" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Contact Us</p>
            </Banner>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div className='pt-5 m-5 space-y-6'>
                    <h1 className='font-bold text-center text-4xl'>Emergency Hotlines</h1>
                    <img src={require('../../res/img/hotlines.png')} alt='Hotlines' />
                </div>

                <div className='pt-5 m-5 space-y-6'>
                    <h1 className='font-bold text-center text-4xl'>Municipal Offices Contacts</h1>

                    <div className='place-items-center'>
                        {contacts.map((data, index) => {
                            return <AccordionItem key={index} open={index === open} data={data} toggle={() => toggle(index)} />;
                        })}
                    </div>
                </div>
                <GetInTouch userType={userType} />
            </div>
        </>
    );
}
function GetInTouch({ userType }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('General Inquiry');

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Define state variables for form inputs
    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [sendCopy, setSendCopy] = useState(false);

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform form submission logic here
        console.log('Form submitted:', { subject, message, sendCopy });
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false); // Close the dropdown when an option is selected
    };
    return (

        <div className='pt-5 m-5 space-y-1'>
            <h1 className='font-bold text-center text-4xl'>Get in Touch with Us</h1>
            <p className='font-semibold text-center text-md'>Do you need more information? Please contact us to find more about San Vicente</p>

            <div className='md:grid md:grid-cols-2 pt-10'>
                <div className='text-center md:text-right px-10 space-y-4 md:my-6 lg:my-14 pb-5 md:pb-0'>
                    <p className='font-semibold text-2xl'>San Vicente, Camarines Norte,</p>
                    <p className='font-semibold text-2xl'>Philippines</p>
                    <div className='flex justify-center md:justify-end items-center space-x-2 select-none cursor-pointer'
                        onClick={() => window.open("https://www.google.com/maps/place/4V4F%2BJ6F,+San+Vicente,+Camarines+Norte/", '_blank').focus()}>
                        <IoLocation className='hidden lg:flex' />
                        <p className='font-normal text-xl'>4V4F+J6F, San Vicente, Camarines Norte</p>
                    </div>
                    <div className='flex justify-center md:justify-end items-center space-x-2'>
                        <BsFillTelephoneFill className='hidden lg:flex' />
                        <p className='font-normal text-xl'>+63 9985470485</p>
                    </div>
                    <div className='flex justify-center md:justify-end items-center space-x-2 select-none cursor-pointer'
                        onClick={() => window.open("mailto:lgusanvicente4609@yahoo.com", '_blank').focus()}>
                        <MdEmail className='hidden lg:flex' />
                        <p className='font-normal text-xl'>lgusanvicente4609@yahoo.com</p>
                    </div>
                    <div className='flex justify-center md:justify-end items-center space-x-2 select-none cursor-pointer'
                        onClick={() => window.open("https://www.facebook.com/sanvicentecamarinesnorte/", '_blank').focus()}>
                        <MdFacebook className='hidden lg:flex' />
                        <p className='font-normal text-xl flex-col'>/sanvicentecamarinesnorte</p>
                    </div>
                </div>
                <div className='flex justify-center md:block'>
                    <div className="block max-w-md rounded-lg border-2 border-black p-4">
                        <form onSubmit={handleSubmit}>

                            <div className="relative inline-block text-left">
                                <button
                                    type="button"
                                    onClick={toggleDropdown}
                                    className="text-white bg-lgu-green hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                                >
                                    {selectedOption}
                                    <svg
                                        className="w-2.5 h-2.5 ml-2.5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg divide-y divide-gray-100 bg-lgu-green z-10">
                                        <ul className="py-2 text-sm text-white dark:text-white">
                                            <li>
                                                <p className="block px-4 py-2 hover:bg-green-600 dark:hover:bg-green-600 dark:hover:text-white" onClick={() => handleOptionSelect('Suggestions and Feedback')}>
                                                    Suggestions and Feedback
                                                </p>
                                            </li>
                                            <li>
                                                <p className="block px-4 py-2 hover:bg-green-600 dark:hover:bg-green-600 dark:hover:text-white" onClick={() => handleOptionSelect('Website Bug/ Issue Report')}>
                                                    Website Bug/ Issue Report
                                                </p>
                                            </li>
                                            <li>
                                                <p className="block px-4 py-2 hover:bg-green-600 dark:hover:bg-green-600 dark:hover:text-white" onClick={() => handleOptionSelect('General Inquiry')}>
                                                    General Inquiry
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {
                                userType === USER_TYPES.Guest ?
                                    <div className="relative mb-6 mt-5" data-te-input-wrapper-init>
                                        <input
                                            required
                                            type="email"
                                            className="block min-h-[auto] rounded border border-1 w-full bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                    :
                                    null
                            }

                            <div className="relative mb-6 mt-5" data-te-input-wrapper-init>
                                <input
                                    required
                                    type="text"
                                    className="block min-h-[auto] rounded border border-1 w-full bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                    id="exampleInput8"
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)} />
                            </div>


                            <div className="relative mb-6" data-te-input-wrapper-init>
                                <textarea
                                    required
                                    className="block min-h-[auto] rounded border border-1 w-full bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                                    id="exampleFormControlTextarea13"
                                    rows="3"
                                    placeholder="Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}></textarea>
                            </div>

                            <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
                                <input
                                    type="checkbox"
                                    id="exampleCheck10"
                                    checked={sendCopy}
                                    onChange={() => setSendCopy(!sendCopy)}
                                />
                                <label
                                    className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                    htmlFor="exampleCheck10"
                                >
                                    Send me a copy of this message
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded border border-1 bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-lgu-green shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-lgu-lime hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-lgu-lime focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <BackToTop />
        </div>
    )
}
