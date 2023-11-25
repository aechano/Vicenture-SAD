import React, { useState } from "react";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';




const AccordionItem = ({ open, toggle, data }) => {

    const [subOpen, setSubOpen] = useState(false);
    const subToggle = (index) => {
        if (subOpen === index) {
            setSubOpen(null);
        } else {
            setSubOpen(index);
        }
    }
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

                    {/* Check if there are subitems */}
                    {data.subitems && (
                        <div className="mt-4">
                            {data.subitems.map((subitem, index) => (
                                <SubAccordionItem
                                    key={index}
                                    open={index === subOpen} // Pass the same open state as the parent
                                    toggle={() => subToggle(index)} // Pass the toggle function of the parent
                                    data={subitem}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Collapse>
        </div>
    );
};

export default AccordionItem;


function SubAccordionItem({ open, toggle, data }) {
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
    );
}
