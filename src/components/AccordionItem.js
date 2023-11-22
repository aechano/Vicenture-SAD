import React from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const AccordionItem = ({ open, toggle, data }) => {
    return (
        <div className="pt-3">
            <div className="bg-lgu-green py-2 p-4 sm:px-16 flex justify-between item-center cursor-pointer rounded-xl" onClick={toggle}>
                <p className="text-md text-white font-semibold mt-1">{data.offices}</p>
                <div className="text-3xl text-white ">
                    {open ? <IoIosArrowUp /> : <IoIosArrowDown />}

                </div>  

            </div>

            <Collapse isOpened={open}>

                <div className="bg-lgu-lime px-16 pb-10 pt-5 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl">
                    <p>Head: {data.head}</p>
                    <p>Email: {data.email}</p>
                    <p>Number: {data.number}</p>
                    <p>Location: {data.location}</p>
                </div>

            </Collapse> 
        </div>
    )
}

export default AccordionItem