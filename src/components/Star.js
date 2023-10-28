import React, { useEffect, useState } from 'react';

export default function FiveStar({setScore, className}) {
    /**
     * FiveStar is a component used for rating purposes.
     * Attributes:
     * setScore = setter variable of a useState.
     * className = additional className for the outer div.
     */
    const [isHovering10, setIsHovering10] = useState(false);
    const [isHovering9, setIsHovering9] = useState(false);
    const [isHovering8, setIsHovering8] = useState(false);
    const [isHovering7, setIsHovering7] = useState(false);
    const [isHovering6, setIsHovering6] = useState(false);
    const [isHovering5, setIsHovering5] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);

    useEffect(() => {
        if (setScore!==undefined){
            if (isHovering1) setScore(0.5);
            else if (isHovering1) setScore(0.5);
            else if (isHovering2) setScore(1);
            else if (isHovering3) setScore(1.5);
            else if (isHovering4) setScore(2);
            else if (isHovering5) setScore(2.5);
            else if (isHovering6) setScore(3);
            else if (isHovering7) setScore(3.5);
            else if (isHovering8) setScore(4);
            else if (isHovering9) setScore(4.5);
            else if (isHovering10) setScore(5);
        }
    }, [isHovering10, isHovering9, isHovering8, isHovering7, isHovering6, isHovering5, isHovering4, isHovering3, isHovering2, isHovering1])

    return (
        <div className={'flex '+className}>
            <LeftHalf state={
                isHovering10 ||
                isHovering9 ||
                isHovering8 ||
                isHovering7 ||
                isHovering6 ||
                isHovering5 ||
                isHovering4 ||
                isHovering3 ||
                isHovering2 ||
                isHovering1}
                setState={setIsHovering1}
            />
            <RightHalf state={
                isHovering10 ||
                isHovering9 ||
                isHovering8 ||
                isHovering7 ||
                isHovering6 ||
                isHovering5 ||
                isHovering4 ||
                isHovering3 ||
                isHovering2}
                setState={setIsHovering2}
            />
            <LeftHalf state={
                isHovering10 ||
                isHovering9 ||
                isHovering8 ||
                isHovering7 ||
                isHovering6 ||
                isHovering5 ||
                isHovering4 ||
                isHovering3}
                setState={setIsHovering3}
            />
            <RightHalf state={
                isHovering10 ||
                isHovering9 ||
                isHovering8 ||
                isHovering7 ||
                isHovering6 ||
                isHovering5 ||
                isHovering4}
                setState={setIsHovering4}
            />
            <LeftHalf state={
                isHovering10 ||
                isHovering9 ||
                isHovering8 ||
                isHovering7 ||
                isHovering6 ||
                isHovering5}
                setState={setIsHovering5}
            />
            <RightHalf state={
                isHovering10 ||
                isHovering9 ||
                isHovering8 ||
                isHovering7 ||
                isHovering6}
                setState={setIsHovering6}
            />
            <LeftHalf state={
                isHovering10 ||
                isHovering9 ||
                isHovering8 ||
                isHovering7}
                setState={setIsHovering7}
            />
            <RightHalf state={
                isHovering10 ||
                isHovering9 ||
                isHovering8}
                setState={setIsHovering8}
            />
            <LeftHalf state={
                isHovering10 ||
                isHovering9}
                setState={setIsHovering9}
            />
            <RightHalf state={
                isHovering10}
                setState={setIsHovering10}
            />
        </div>
    );
}

function RightHalf({ state, setState }) {
    const handleMouseEnter = () => {
        setState(true);
    };
    const handleMouseLeave = () => {
        setState(false);
    };
    return (
        <svg
            className={'w-14 h-28 stroke-1 stroke-black hover:fill-current hover:text-lgu-yellow ' +
                (state ? 'text-lgu-yellow fill-current' : 'fill-none')
            }
            viewBox="0 0 12 24"
            strokeLinecap="square" strokeLinejoin="arcs"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <path d="M0 2 3.09 8.26 10 9.27 5 14.14 6.18 21.02 0 17.77" />
        </svg>
    );
}

function LeftHalf({ state, setState }) {
    const handleMouseEnter = () => {
        setState(true);
    };
    const handleMouseLeave = () => {
        setState(false);
    };
    return (
        <svg
            className={
                'w-14 h-28 stroke-1 stroke-black hover:fill-current hover:text-lgu-yellow ' +
                (state ? 'text-lgu-yellow fill-current' : 'fill-none')
            }
            viewBox="0 0 12 24"
            strokeLinecap="square"
            strokeLinejoin="arcs"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <path d="M12 2 8.91 8.26 2 9.27 7 14.14 5.82 21.02 12 17.77" />
        </svg>
    );
}
