import React, { useEffect, useState } from 'react'
import { LuClipboardList } from "react-icons/lu";
import { IoIosCloseCircle } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import { PATH_NAME } from '../Variables/GLOBAL_VARIABLE';

export default function SurveyIcon({ setClose, backToTopShowing }) {
    const [isHovered, setIsHovered] = useState(false);
    const [bottomPosition, setBottomPosition] = useState('bottom-30')
    useEffect(() => {
        setTimeout(() => {
            setIsHovered(true); // close the full view of pop-up 3 seconds after run.
        }, 500);
        setTimeout(() => {
            setIsHovered(false); // close the full view of pop-up 3 seconds after run.
        }, 3000);
    }, [])
    useEffect(() => {
      if (backToTopShowing) {
        setBottomPosition('bottom-40');
      } else {
        setBottomPosition('bottom-30');
      }
    }, [backToTopShowing])
    

    return (
        <>
            <IoIosCloseCircle
                className={`fixed ${bottomPosition} right-3 z-20 opacity-70 hover:opacity-100 cursor-pointer`}
                onClick={() => setClose()} />
            <div className={`fixed ${bottomPosition} right-4 z-10 ${isHovered ? "opacity-100" : "opacity-30"}`}>
                <div
                    className={`flex items-center space-x-4 bg-green-600 p-3 rounded-full text-white cursor-pointer transition-transform transform-gpu ${isHovered ? 'translate-x-[-10px]' : ''}`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <NavLink to={PATH_NAME.Survey} onClick={() => window.scrollTo({ top: 0, left: 0 })} className={'flex'}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-2xl"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <LuClipboardList />
                        </svg>
                        <div className={`transition-opacity h-6 px-3 ${isHovered ? 'opacity-100 md:inline-block' : 'opacity-0'} hidden `}>
                            <p className='leading-6 align-middle'>New survey available!</p>
                        </div>
                    </NavLink>


                </div>
            </div>
        </>
    )
}
