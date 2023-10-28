import React from "react";
import { Collapse } from "react-collapse";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai"

const AccordionItem = ({ open, toggle, offices, head, email, number, location }) => {
    return (
        <div className="pt-3">
            <div className="bg-lgu-green py-2 px-16 flex justify-between item-center cursor-pointer rounded-xl" onClick={toggle}>
                <p className="text-md text-white font-semibold">{offices}</p>
                <div className="text-3xl text-white ">
                    {open ? <AiOutlineMinus/> : <AiOutlinePlus/>}

                </div>  

            </div>

            <Collapse isOpened={open}>

                <div className="bg-lgu-lime px-16 pb-10 pt-5 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl">
                    <p>Head: {head}</p>
                    <p>Email: {email}</p>
                    <p>Number: {number}</p>
                    <p>Location: {location}</p>
                </div>

            </Collapse>
        </div>
    )
}

export default AccordionItem