import React, { useState } from 'react';
import { AiFillMessage } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { PATH_NAME } from '../Variables/GLOBAL_VARIABLE';

const ChatIcon = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="fixed bottom-4 right-4 z-10">
            <div
                className={`flex items-center space-x-4 bg-green-600 p-4 rounded-full text-white cursor-pointer transition-transform transform-gpu ${isHovered ? 'hover:translate-x-[-20px]' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <NavLink to={PATH_NAME.Messages} onClick={() => window.scrollTo({ top: 0, left: 0 })} className={'flex'}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-2xl"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <AiFillMessage />
                    </svg>
                    <div className={`transition-opacity ${isHovered ? 'opacity-100 md:inline-block pt-2' : 'opacity-0'} hidden `}>
                        Do you have any questions? Chat us now!
                    </div>
                </NavLink>


            </div>
        </div>
    );
};

export default ChatIcon;
