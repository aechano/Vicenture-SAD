import React, { useState } from "react";
import Banner from "../../components/Banner";
import { NavLink } from "react-router-dom";
import { Collapse } from "react-collapse";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { PATH_NAME } from "../../Variables/GLOBAL_VARIABLE";

export default function Survey() {

    const [open, setOpen] = useState(false);
    const toggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    }

    var contents = [
        {
            image: require("../../res/img/rain.png"),
            title: "Heavy Rainfall Preparedness",
            desc: "The 'Heavy Rainfall Preparedness' survey for San Vicente citizens aims to assess our community's readiness for heavy rainfall events, focusing on awareness, preparedness measures, and suggestions for improvement. Your insights are vital in enhancing disaster preparedness and ensuring the safety of all residents. Please participate through the provided online survey link or in-person at local events, and help us build a more resilient San Vicente. Thank you for your active participation.",
        },
        {
            image: require("../../res/img/rain.png"),
            title: "Heavy Rainfall Preparedness",
            desc: "The 'Heavy Rainfall Preparedness' survey for San Vicente citizens aims to assess our community's readiness for heavy rainfall events, focusing on awareness, preparedness measures, and suggestions for improvement. Your insights are vital in enhancing disaster preparedness and ensuring the safety of all residents. Please participate through the provided online survey link or in-person at local events, and help us build a more resilient San Vicente. Thank you for your active participation.",
        },
        {
            image: require("../../res/img/rain.png"),
            title: "Heavy Rainfall Preparedness",
            desc: "The 'Heavy Rainfall Preparedness' survey for San Vicente citizens aims to assess our community's readiness for heavy rainfall events, focusing on awareness, preparedness measures, and suggestions for improvement. Your insights are vital in enhancing disaster preparedness and ensuring the safety of all residents. Please participate through the provided online survey link or in-person at local events, and help us build a more resilient San Vicente. Thank you for your active participation.",
        },
        {
            image: require("../../res/img/rain.png"),
            title: "Heavy Rainfall Preparedness",
            desc: "The 'Heavy Rainfall Preparedness' survey for San Vicente citizens aims to assess our community's readiness for heavy rainfall events, focusing on awareness, preparedness measures, and suggestions for improvement. Your insights are vital in enhancing disaster preparedness and ensuring the safety of all residents. Please participate through the provided online survey link or in-person at local events, and help us build a more resilient San Vicente. Thank you for your active participation.",
        },
    ];

    var questions = [
        {
            quest: "How long will my response will be stored?",
            ans: "We assure you that your answers to these surveys will be deleted from our database as soon as the data gathered is analyzed by the system. This data analysis will be done when the survey expires. ",
        },
        {
            quest: "How long will my response will be stored?",
            ans: "We assure you that your answers to these surveys will be deleted from our database as soon as the data gathered is analyzed by the system. This data analysis will be done when the survey expires. ",
        },
        {
            quest: "How long will my response will be stored?",
            ans: "We assure you that your answers to these surveys will be deleted from our database as soon as the data gathered is analyzed by the system. This data analysis will be done when the survey expires. ",
        },
    ]

    return (
        <>
            <Banner bannerType="common" src={require("../../res/img/mananap_falls.png")} alt="Mananap Falls" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Online Survey</p>
            </Banner>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-7">
                <div className="text-center">
                    <h1 className="font-bold text-3xl pb-5">Online Survey</h1>
                    <p className="text-md"><span className="italic">“Shaping the Future Together: Your Voice Matters in LGU San Vicente Surveys” <br /></span>
                        In the heart of our beloved San Vicente, we believe that collective voices have the power to shape the future, and that's why we need your help. As the Local Government Unit (LGU) of San Vicente, we are committed to improving the quality of life for all residents and making our community even better. To achieve this goal, we invite you to participate in our online surveys, which cover a wide range of topics, from disaster response to statistical research.</p>
                </div>

                <div className="text-center m-5">
                    <h2 className="font-bold text-lg pb-5">Active Surveys</h2>

                    <div>
                        {contents.map((content, index) => {
                            return (<Content key={index} content={content} />)
                        })}
                    </div>
                </div>

                <div className="text-center m-5">
                    <h2 className="font-bold text-lg pb-5">Frequently Ask Questions</h2>
                    <div className='place-items-center'>
                        {questions.map((data, index) => {
                            return <FAQs key={index} open={index === open} data={data} toggle={() => toggle(index)} />;
                        })}
                    </div>

                </div>


            </div>
        </>
    );
}

function Content({ content }) {
    return (
        <div className="m-3">
            <NavLink to={PATH_NAME.SampleSurvey} className="flex flex-col items-center bg-white border border-gray-100 rounded-sm shadow md:flex-row md:mx-auto hover:bg-gray-100 dark:border-gray-200 dark:bg-gray-100 dark:hover:hover:bg-gray-200" onClick={() => window.scrollTo({top: 0, left:0, behavior: "smooth"})}>
                <img className="object-cover w-full h-96 md:h-auto md:w-48 rounded-sm m-3" src={content.image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal md:border-l-2 md:border-t-0 border-t-2 border-gray-500">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-black text-left">{content.title}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark-text-gray-400 text-left">{content.desc}</p>
                </div>
            </NavLink>
        </div>
    );
}


function FAQs({ open, toggle, data }) {
    return (
        <div className="pt-3">
            <div className="bg-lgu-green py-2 px-16 flex justify-between item-center cursor-pointer rounded-xl" onClick={toggle}>
                <p className="text-md text-white font-semibold">{data.quest}</p>
                <div className="text-3xl text-white ">
                    {open ? <IoIosArrowUp /> : <IoIosArrowDown />}

                </div>

            </div>

            <Collapse isOpened={open}>

                <div className="bg-lgu-lime px-16 pb-10 pt-5 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl">
                    <p>{data.ans}</p>

                </div>

            </Collapse>
        </div>
    );

}