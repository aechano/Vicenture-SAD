import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


export default function SectionContent(props) {
    /**
     * This tag is for creating the sections pattern. It has the following values and their default (def) values:
     * - left (def:false)
     * - title (def:"No Title")
     * - src (def: "")
     * - alt (def: "")
     * - button (def:undefined <no button>)
     * - arrow (def:false)
     * - href (def:"/" <home page>)
     * This tag will also take textual childs, just like a <p> tag. The default is an empty string.
     */
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className={"mt-10 pb-4 " + (props.left ? "bg-lgu-green" : "")}> {/*If this is a left-type component, make the background green*/}
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5 ">
                <div className="sm:flex items-center pt-5 pb-5">
                    {/*Barline goes first if this is a left-type section*/}
                    {props.left ?
                        <div className="sm:flex-grow sm:h-1 sm:rounded-full sm:bg-lgu-lime" />
                        :
                        null
                    }
                    {/*Section title*/}
                    <h1 className={"text-4xl md:p-2 font-bold p-0 mb-0 mt-0 text-center " + (props.left ? "text-lgu-lime" : "text-black")}>
                        {props.title !== undefined ? props.title : "No Title"}
                    </h1>
                    {/*Barline goes last if this is a right-type section*/}
                    {!props.left ?
                        <div className="sm:flex-grow sm:h-1 sm:rounded-full sm:bg-black" />
                        :
                        null
                    }
                </div>
                <div className="relative h-full">
                    <div className="flex flex-col sm:items-start">
                        {/*This image and image title will show up if this is a left-type section*/}
                        <div className='pt-5 sm:pt-0 w-full'>
                            {/*This is the image*/}
                            <img
                                className="p-5 rounded-lg sm:h-96 mx-auto"
                                srcSet={props.src !== undefined ? props.src : ""}
                                alt={props.alt !== undefined ? props.alt : ""}
                            />
                            {/*This is the image title*/}
                            {props.altDisplay !== undefined ?
                                <p className="sm:pt-2 text-black font-bold text-center">{props.altDisplay}</p>
                                :
                                null
                            }
                        </div>
                        <div className='h-auto w-full align-middle'>
                            {/*This is where the main text of the section goes*/}
                            <p className={" m-auto w-auto p-2 sm:p-7 sm:leading-7 indent-10 " + (props.left ? "text-lgu-lime text-justify" : "text-justify text-black")}>
                                {props.children !== undefined ? props.children : ""}
                            </p>
                            {/*If button is needed*/}
                            {props.button !== undefined ?
                                <NavLink
                                    className={"transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300 " +
                                        (props.left ? "mt-5 sm:mx-7 md:items-center lg:float-right" : "mt-5 sm:mx-7 md:float-left")} onClick={props.onClick} // ito pi yung nadagdag huehue
                                    to={props.href !== undefined ? props.href : "/"}>
                                    {props.button}
                                    {props.arrow ?
                                        <svg
                                            className="w-3.5 h-3.5 ml-2"
                                            aria-hidden="true"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                        :
                                        null}
                                </NavLink>
                                :
                                null
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
