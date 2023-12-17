import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { timeAgo } from '../../functionHelpers/Time';
import Body from '../../classifiers/Body';
import CommentingSystem from '../../components/CommentingSystem';
import axios from 'axios';
import { API } from '../../Variables/GLOBAL_VARIABLE';

export default function ForumsAndDiscussionsPost() {

    let { forumID } = useParams();
    const [content, setContent] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (forumID) {
            axios.get(API.getForumWithID(forumID), {})
                .then((response) => response.data)
                .then((data) => {
                    setContent(data);
                })
        } else {
            navigate(-1);
        }
    }, [forumID]);

    return (
        <div className='w-full bg-gray-400 py-20'>
            <Body className="w-3/4 mx-auto p-10 shadow-md bg-gray-100 rounded-3xl">
                <table className="table-auto select-none">
                    <tbody>
                        <tr className=''>
                            <td className='w-10 h-10'> {/** Display the user pfp in the upperleft-most cell */}
                                <img
                                    src={content.user?.profilePicture ? 'data:image/jpeg;base64,' + content.user?.profilePicture : require("./../../res/img/icon.png")}
                                    alt={"Profile picture of " + content.user?.accountUsername}
                                    className='rounded-full w-10/12 h-10/12 mx-auto my-auto'
                                />
                            </td>
                            <td> {/** Display upload information beside the image such as: username, upload timestamp, and the topic */}
                                <div className='h-full align-contents-middle'>
                                    <p className='text-xs h-full'>{content.topics?content.topics[0]:null}&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(content.uploadTimestamp)}</span></p>
                                    <p className='text-xs'>{content.user?.accountUsername}</p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td></td> {/** Keep the cells below the image empty */}
                            <td className='text-3xl'>
                                <p className='mt-10'>{content.title}</p>
                            </td> {/** Display the title of the content */}
                        </tr>
                        <tr>
                            <td></td> {/** Keep the cells below the image empty */}
                            <td className='p-10'>{content.body}</td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                        </tr>
                        <tr>
                            <td></td> {/** Keep the cells below the image empty */}
                            <td>
                                <div className='w-full justify-center p-10 flex flex-wrap'>
                                    {content.bodyImgs !== undefined ?
                                        content.bodyImgs.map((img, index) => {
                                            return (
                                                <img
                                                    key={index}
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className='w-96 h-auto mx-auto my-5 shadow-md justify-self mx-auto'
                                                />
                                            )
                                        })
                                        :
                                        null
                                    }
                                </div>
                            </td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                        </tr>
                    </tbody>
                </table>

                <div className='h-1 rounded-full my-10 bg-gray-200 mx-10' />

                <div className='flex ps-10'>
                    {/** Up/Down voting system */}
                    <div className='flex bg-lgu-yellow w-fit p-2 rounded-full select-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 cursor-pointer bg-lgu-yellow rounded-full hover:brightness-95' viewBox="0 0 24 24"
                            fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M16 12l-4-4-4 4M12 16V9" />
                        </svg>
                        <p className='text-sm mx-2'>0</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5 cursor-pointer bg-lgu-yellow rounded-full hover:brightness-95' viewBox="0 0 24 24"
                            fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M16 12l-4 4-4-4M12 8v7" />
                        </svg>
                    </div>
                    {/** Comment info display */}
                    <div className='flex bg-lgu-yellow w-fit p-2 ml-10 rounded-full select-none'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                            fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <p className='text-sm mx-2'>0</p>
                    </div>
                </div>
                <CommentingSystem content={forumID} />
            </Body>
        </div>
    )
}