import React, { useEffect, useRef, useState } from 'react'
import { timeAgo } from '../../functionHelpers/Time';
import { PATH_NAME, SOCKET, USER_TYPES } from '../../Variables/GLOBAL_VARIABLE';
import { useNavigate, useParams } from 'react-router';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import SockJS from 'sockjs-client';
import { over } from 'stompjs';

export default function Messaging({ userType }) {
    const navigate = useNavigate();
    const chatContainerRef = useRef();
    const [currentChat, setCurrentChat] = useState();
    const [chatType, setChatType] = useState();
    const [chats, setChats] = useState();
    const [email, setEmail] = useState();
    const [messages, setMessages] = useState();
    const { receiver } = useParams();

    useEffect(() => {
        var token = Cookies.get("token");
        if (token) {
            var payload = jwtDecode(token);
            setEmail(payload.sub)
            userType = payload.AccountType
        } else {
            navigate(PATH_NAME.Home);
        }
        var type = USER_TYPES.EndUsers.includes(userType) ? "Offices" : "EndUser"
        setChatType(type);
        console.log(type);
        console.log(userType);

        if (type === "EndUser") {
            // retrieve all users that contacted this office
            setChats([
                {
                    Id: 0,
                    Username: "Gheeelo",
                    UserPicture: require("./../../res/img/angelo.png"),
                    lastMessage: "You: I will send you a  ...",
                    lastMessageSender: null,
                    lastMessageTimestamp: null
                }
            ])
        } else {
            // retrieve all offices
            setChats([
                {
                    Id: 0,
                    Username: "Municipal Treasurer's Office",
                    UserPicture: require("./../../res/img/logo.png"),
                    lastMessage: null,
                    lastMessageSender: null,
                    lastMessageTimestamp: null
                }
            ])
        }

        if (typeof receiver === "number") {
            // receiver is an end-user
            if (type === "Offices") {
                navigate(PATH_NAME.Messages)
            }
            // set currentChat to selected user
            for (let chat in chats) {
                if (chat.Id === receiver) {
                    setCurrentChat(chat);
                }
            }
            if (currentChat === undefined) {
                navigate(PATH_NAME.Messages)
            }
        } else if (receiver !== undefined) {
            // receiver is an office
            if (type === "EndUser") {
                navigate(PATH_NAME.Messages)
            }
            // set currentChat to selected office
            for (let chat in chats) {
                if (chat.Username === encodeURIComponent(receiver)) {
                    setCurrentChat(chat);
                }
            }
            if (currentChat === undefined) {
                navigate(PATH_NAME.Messages)
            }
        }

        setMessages(
            [
                {
                    messageID: 0,
                    sender: currentChat,
                    messageContent: "Here are the files that you wanted.",
                    timestamp: new Date().getTime() - (1000 * 60 * 60 * 24 * 5)
                },
                {
                    messageID: 1,
                    sender: payload.sub,
                    messageContent: "Thank you very much!",
                    timestamp: new Date().getTime() - (1000 * 60 * 10 + 1000),
                },
                {
                    messageID: 2,
                    sender: currentChat,
                    messageContent: "No problem.",
                    timestamp: new Date().getTime(),
                },
                {
                    messageID: 3,
                    sender: payload.sub,
                    messageContent: "I will send you a Lorem Ipsum, okay? \n\n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt dui ut ornare lectus sit amet est. Blandit aliquam etiam erat velit scelerisque. Nullam eget felis eget nunc lobortis mattis aliquam. Ac tortor vitae purus faucibus ornare. Sit amet consectetur adipiscing elit ut aliquam. Vel elit scelerisque mauris pellentesque pulvinar pellentesque. Tincidunt dui ut ornare lectus sit. Ac orci phasellus egestas tellus rutrum tellus. Nunc sed blandit libero volutpat sed cras. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Sit amet justo donec enim diam. Lacus vel facilisis volutpat est velit egestas. Ante metus dictum at tempor. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. \nAmet nisl purus in mollis nunc. Velit aliquet sagittis id consectetur purus ut. Turpis tincidunt id aliquet risus feugiat. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Tristique senectus et netus et malesuada fames ac turpis. Tortor consequat id porta nibh venenatis cras sed felis eget. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Quis ipsum suspendisse ultrices gravida dictum. Volutpat consequat mauris nunc congue nisi vitae suscipit tellus mauris. Ac turpis egestas maecenas pharetra convallis posuere morbi. Malesuada proin libero nunc consequat interdum varius sit. Diam maecenas ultricies mi eget mauris pharetra et ultrices neque. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt. Eu ultrices vitae auctor eu augue ut lectus arcu bibendum. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa.",
                    timestamp: new Date().getTime(),
                },
            ]
        )
    }, [])
    // Function to scroll the chat to the bottom
    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    // useEffect to scroll to the bottom whenever messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    var stompClient = null;
    const registerUser = () => {
        let Sock = new SockJS(SOCKET.Messaging);
        stompClient = over(Sock);
        stompClient.connect({}, onConnected, onError);
    }
    const onConnected = () => {
        console.log("Connected to: "+'/user/' + currentChat.Id + "/m")
        stompClient.subscribe('/user/' + currentChat.Id + "/m", onMessageReceived)
    }
    const onMessageReceived = (payload) => {
        let payloadData = JSON.parse(payload.body);
        /* here are the data received */
    }

    const onError = (err) => {
        console.log(err);
    }

    const sendMessage = () => {
        if (stompClient) {
            /* create the data object to send*/
            stompClient.send('/app/message', {}, JSON.stringify(/*data here*/))
        }
    }

    registerUser();
    return (
        <>
            <div className='fixed top-4 left-0 z-40 w-80 drop-shadow-md bg-white h-screen ps-5 mt-20'> {/** This is the sidebar */}
                <div className='flex h-17 pe-5'>
                    <h1 className='text-lgu-green text-xl select-none h-full grow'>
                        Messaging
                    </h1>
                </div>
                <div className='overflow-y-scroll h-full pb-32'>
                    {chats ?
                        chats.map((users, index) => <ChatSidePanel
                            key={index}
                            onClick={setCurrentChat}
                            user={users}
                            className="mb-1 pe-2"
                            chatType={chatType} />
                        )
                        :
                        null
                    }
                </div>
            </div>
            <div className='w-full ps-80'>
                {receiver ?
                    <div>
                        <div className='fixed top-20 lg:top-24 w-full h-20 bg-lgu-yellow flex z-20'> {/** Topbar */}
                            <div className='ps-2 pt-2 w-20'>
                                <img
                                    className='h-16 w-16'
                                    src={chatType === "Offices" ? require("./../../res/img/logo.png") : currentChat ? currentChat.UserPicture : null}
                                    alt={chatType === "Offices" ? "Logo of San Vicente LGU" : "User Picture of " + currentChat ? currentChat?.Username : null} />
                            </div>
                            <p className='absolute text-xl left-20 top-8 h-full'>{currentChat ? currentChat?.Username : null}</p>
                        </div>

                        <div className='fixed left-0 w-full h-screen overflow-y-scroll no-scrollbar pb-40 pt-20 pe-5 ps-80' ref={chatContainerRef}> {/** Chat threads */}
                            {messages
                                ?
                                messages.map((messageDetails) => {
                                    if (email === messageDetails.sender) {
                                        return (
                                            <MyChat
                                                key={messageDetails.messageID}
                                                content={messageDetails.messageContent}
                                                timestamp={messageDetails.timestamp}
                                                file={messageDetails.file} />
                                        )
                                    } else {
                                        return (
                                            <OtherChat
                                                key={messageDetails.messageID}
                                                content={messageDetails.messageContent}
                                                timestamp={messageDetails.timestamp}
                                                file={messageDetails.file} />
                                        )
                                    }
                                })
                                :
                                null
                            }
                        </div>

                        <div className='fixed bottom-0 left-0 w-full h-14 bg-gray-100 flex ps-80 z-20'> {/** Bottombar */}
                            <input type='text' className='bg-white w-9/12 h-10 rounded-full ml-14 mt-2 ps-5 shadow-chat' />
                            <svg className='w-10 h-8 m-3 cursor-pointer text-lgu-green fill-current hover:brightness-110'
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M16,464,496,256,16,48V208l320,48L16,304Z" />
                            </svg>
                        </div>
                    </div>
                    :
                    <div className='fixed flex top-24 bottom-0 right-0 left-80 bg-gray-200 justify-center'>
                        <div>
                            <img
                                src={require("./../../res/img/waterfall.png")}
                                className='w-40 h-40 opacity-50 mt-32' />
                            <p className='mt-5 select-none'>Select a conversation</p>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

function ChatSidePanel({ user, className, onClick, chatType }) {
    const navigate = useNavigate();
    return (
        <div className={className} onClick={() => {
            navigate(PATH_NAME.Messages + "/" + (chatType === "Offices" ? decodeURIComponent(user.Username) : user.Id))
            onClick(user)
        }}>
            <div className='h-20 w-full bg-white hover:brightness-95 rounded-xl flex select-none'>
                <div className='ps-2 pt-2 w-20'>
                    <img
                        className='h-16 w-16'
                        src={chatType === "Offices" ? require("./../../res/img/logo.png") : user ? user.UserPicture : null}
                        alt={chatType === "Offices" ? "Logo of San Vicente LGU" : "User Picture of " + user ? user.Username : null} />
                </div>
                <div className='w-48 pt-5'>
                    <p className='truncate'>{user.Username}</p>
                    <div className='flex'>
                        <p className='text-sm'>{user.lastMessage !== null ? user.lastMessage : "Have an inquiry?"}</p>
                        {
                            user.lastMessageTimestamp !== null ?
                                <p className='text-gray-600'>&nbsp;•&nbsp;<span className='text-xs'>{timeAgo(user.lastMessageTimestamp)}</span></p>
                                :
                                null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
function MyChat({ content, file }) {
    return (
        <div className='h-auto w-auto max-w-xl float-right mt-5 bg-gray-100 p-5 rounded-3xl whitespace-pre-wrap clear-both'>
            <p>{content}</p>
        </div>
    )
}
function OtherChat({ content, file }) {
    return (
        <div className='h-auto w-auto max-w-xl float-left mt-5 bg-lgu-lime p-5 ml-5 rounded-3xl whitespace-pre-wrap clear-both'>
            <p>{content}</p>
        </div>
    )
}