import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sections(props) {
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
    return (
        <div className={"mt-10 pb-4 " + (props.left ? "bg-lgu-green" : "")}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5 ">
                <div className="sm:flex items-center pt-5">
                    {props.left ?
                        <div className="sm:flex-grow sm:h-1 sm:rounded-full sm:bg-lgu-lime" />
                        :
                        null
                    }
                    <h1 className={"lg:text-3xl md:p-2 font-bold p-0 text-2xl mb-0 mt-0 text-center " + (props.left ? "text-lgu-lime" : "text-black")}>
                        {props.title !== undefined ? props.title : "No Title"}
                    </h1>
                    {!props.left ?
                        <div className="sm:flex-grow sm:h-1 sm:rounded-full sm:bg-black" />
                        :
                        null
                    }
                </div>
                <div className="relative h-full">
                    <div className="sm:flex sm:flex-col sm:items-start lg:flex-row">
                        {props.left ?
                            <div className='pt-5 sm:pt-0 sm:w-full'>
                                <img
                                    className="p-5 rounded-xl sm:h-72 mx-auto"
                                    srcSet={props.src !== undefined ? props.src : ""}
                                    alt={props.alt !== undefined ? props.alt : ""}
                                />
                                {props.altDisplay !== undefined ?
                                    <p className="sm:pt-2 text-black font-bold text-center">{props.altDisplay}</p>
                                    :
                                    null
                                }
                            </div>
                            :
                            null
                        }
                        <div className='h-auto lg:w-9/12 align-middle'>
                            <p className={" m-auto w-auto p-2 sm:p-7 sm:leading-7 " + (props.left ? "text-lgu-lime text-justify lg:text-left" : "text-justify text-black lg:text-right")}>
                                {props.children !== undefined ? props.children : ""}
                            </p>
                            {props.button !== undefined ?
                                <NavLink
                                    className={"text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300 " +
                                        (props.left ? "mt-5 sm:mx-7 md:float-right" : "mt-5 sm:mx-7 md:float-left")}
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
                        {!props.left ?
                            <div className='pt-5 sm:pt-0 sm:w-full '>
                                <img
                                    className="sm:h-72 lg:w-auto p-5 rounded-xl mx:auto"
                                    src={props.src !== undefined ? props.src : ""}
                                    alt={props.alt !== undefined ? props.alt : ""}
                                />
                                {props.altDisplay !== undefined ?
                                    <p className="pb-3 sm:pt-2 text-black font-bold text-center">{props.altDisplay}</p>
                                    :
                                    null
                                }
                            </div>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
