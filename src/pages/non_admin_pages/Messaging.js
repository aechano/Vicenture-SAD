import React, { useState } from 'react'
import { timeAgo } from '../../functionHelpers/Time';

export default function Messaging() {
    var offices = [
        {
            officeId: 0,
            office: "Municipal Treasurer's Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 1,
            office: "Business Permit and Licensing Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 2,
            office: "Municipal Assessor's Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 3,
            office: "Municipal Engineering Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 4,
            office: "Municipal Budget Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 5,
            office: "Municipal Social Welfare and Development Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 6,
            office: "Municipal Traffic & Public Safety Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 7,
            office: "Municipal Health Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 8,
            office: "Municipal Civil Registrar",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 9,
            office: "Municipal Disaster Risk Reduction and Management Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 10,
            office: "Sangguniang Bayan Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 11,
            office: "Municipal Mayor's Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 12,
            office: "Vice-Mayor's Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 13,
            office: "Municipal Planning & Development Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
        {
            officeId: 14,
            office: "Tourism Office",
            officeLogo: require("./../../res/img/logo.png"),
            lastMessage: null,
            lastMessageSender: null,
            lastMessageTimestamp: null
        },
    ]
    const [currentChat, setCurrentChat] = useState(offices[0]);
    var messages = [
        {
            messageID: "100-0-1",
            sender: currentChat.office,
            messageContent: "Here are the files that you wanted.",
            timestamp: new Date().getTime(),
            file: [
                {
                    fileID: "100-0-1-1",
                    file: "",
                    fileType: "pdf",
                    timestamp: new Date().getTime()
                },
                {
                    fileID: "100-0-1-2",
                    file: "",
                    fileType: "pdf",
                    timestamp: new Date().getTime()
                },
                {
                    fileID: "100-0-1-3",
                    file: "",
                    fileType: "pdf",
                    timestamp: new Date().getTime()
                },
            ]
        },
        {
            messageID: "100-0-2",
            sender: "gheeelo@gmail.com",
            messageContent: "Thank you very much!",
            timestamp: new Date().getTime(),
            file: []
        },
    ]
    return (
        <>
            <div className='fixed top-0 left-0 z-40 w-80 drop-shadow-md bg-white h-screen ps-5 mt-20'> {/** This is the sidebar */}
                <div className='flex h-17 pe-5'>
                    <h1 className='text-lgu-green text-xl select-none h-full grow'>
                        Messaging
                    </h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-17 cursor-pointer' viewBox="0 0 24 24"
                        fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="19" cy="12" r="1" />
                        <circle cx="5" cy="12" r="1" />
                    </svg>
                </div>
                <div className='overflow-y-scroll h-full pb-32'>
                    {offices.map((office, index) => <ChatSidePanel key={index} onClick={setCurrentChat} office={office} className="mb-1 pe-2" />)}
                </div>
            </div>
            <div className='w-full ps-80'>
                <div className='fixed top-20 w-full h-20 bg-lgu-yellow flex'> {/** Topbar */}
                    <div className='ps-2 pt-2 w-20'>
                        <img
                            className='h-16 w-16'
                            src={currentChat.officeLogo}
                            alt={'office logo of ' + currentChat.office} />
                    </div>
                    <p className='absolute text-xl left-20 top-8 h-full'>{currentChat.office}</p>
                </div>



                <div className='fixed bottom-0 left-0 w-full h-14 bg-gray-100 flex ps-80'> {/** Bottombar */}
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute w-10 h-10 rounded-full bg-lgu-yellow m-2 cursor-pointer'
                        viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="1" stroke-linecap="round"
                        stroke-linejoin="round">
                        <rect x="11" y="5" width="2" height="14" style={{ fill: "black", strokeWidth: "0" }} />
                        <rect x="5" y="11" width="14" height="2" style={{ fill: "black", strokeWidth: "0" }} />
                    </svg>
                    <input type='text' className='bg-white w-9/12 h-10 rounded-full ml-14 mt-2 ps-5 shadow-chat' />
                    <svg className='w-10 h-8 m-3 cursor-pointer text-lgu-green fill-current hover:brightness-110'
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
                    </svg>
                </div>
            </div>
        </>
    )
}

function ChatSidePanel({ office, className, onClick }) {
    return (
        <div className={className} onClick={() => onClick(office)}>
            <div className='h-20 w-full bg-white hover:brightness-95 rounded-xl flex select-none'>
                <div className='ps-2 pt-2 w-20'>
                    <img
                        className='h-16 w-16'
                        src={office.officeLogo}
                        alt={'office logo of ' + office.office} />
                </div>
                <div className='w-48 pt-5'>
                    <p className='truncate'>{office.office}</p>
                    <div className='flex'>
                        <p className='text-sm'>{office.lastMessage !== null ? office.lastMessage : "Have an inquiry?"}</p>
                        {
                            office.lastMessageTimestamp !== null ?
                                <p className='text-gray-600'>&nbsp;•&nbsp;<span className='text-xs'>{timeAgo(office.lastMessageTimestamp)}</span></p>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
