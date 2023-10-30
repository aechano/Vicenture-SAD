import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router'
import { timeAgo } from '../../functionHelpers/Time';
import Body from '../../classifiers/Body';

export default function ForumsAndDiscussionsPost() {

    let { forumID } = useParams();
    const [content, setContent] = useState({});
    const [addComment, setAddComment] = useState(false);
    const [comment, setComment] = useState();

    var contents = [
        {
            contentID: 1002,
            username: "Ghe3lo_",
            userPFP: require("./../../res/debug_img/userpfp1.png"),
            uploadTimestamp: Date.now() - 2 * 60 * 1000, // 1 second: 1000
            topic: "Sports Tourism",
            title: "Joining The LGU-SV Basketball Team",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
            bodyImgs: []
        },
        {
            contentID: 1001,
            username: "X3_nia",
            userPFP: require("./../../res/debug_img/userpfp2.png"),
            uploadTimestamp: Date.now() - 23 * 60 * 60 * 1000, // 1 second: 1000
            topic: "Peer-to-peer Helping",
            title: "Sharing My Notes When I Was in College Pt.2",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
            bodyImgs: [require("./../../res/debug_img/xenia_content_imgs1.png"), require("./../../res/debug_img/xenia_content_imgs2.png"), require("./../../res/debug_img/xenia_content_imgs1.png"), require("./../../res/debug_img/xenia_content_imgs3.png"), require("./../../res/debug_img/xenia_content_imgs3.png")]
        },
        {
            contentID: 1000,
            username: "J0si3x_x",
            userPFP: require("./../../res/debug_img/userpfp4.png"),
            uploadTimestamp: Date.now() - 24 * 60 * 60 * 1000, // 1 second: 1000
            topic: "Falls",
            title: "Reasons Why I Keep Visiting The Mananap Falls",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
            bodyImgs: []
        },
        {
            contentID: 999,
            username: "Fr4ncyyy",
            userPFP: require("./../../res/debug_img/userpfp3.png"),
            uploadTimestamp: Date.now() - 7 * 24 * 60 * 60 * 1000, // 1 second: 1000
            topic: "Coaching",
            title: "Nahire Ako Bilang Isang Coach ng LGU Sports Team!",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
            bodyImgs: []
        },
        {
            contentID: 998,
            username: "Th3Skyler08",
            userPFP: require("./../../res/debug_img/userpfp5.png"),
            uploadTimestamp: Date.now() - 3 * 4 * 7 * 24 * 60 * 60 * 1000, // 1 second: 1000
            topic: "Resorts",
            title: "Check Out My Resort Here in San Vicente; Check In Now!",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
            bodyImgs: []
        },
    ]

    var comments = [
        {
            commentID: String(content.contentID) + "-1",
            username: "Th3Skyler08",
            userPFP: require("./../../res/debug_img/userpfp5.png"),
            comment: "Coolio~!",
            bodyImgs: [require("./../../res/debug_img/xenia_content_imgs1.png"), require("./../../res/debug_img/xenia_content_imgs2.png"), require("./../../res/debug_img/xenia_content_imgs3.png"), require("./../../res/debug_img/xenia_content_imgs2.png"), require("./../../res/debug_img/xenia_content_imgs1.png")],
            timestamp: Date.now() - 30 * 1000,
            replies: [
                {
                    replyID: String(content.contentID) + "-1-1",
                    username: "Fr4ncyyy",
                    userPFP: require("./../../res/debug_img/userpfp3.png"),
                    reply: "True!",
                    bodyImgs: [],
                    timestamp: Date.now() - 15 * 1000
                },
                {
                    replyID: String(content.contentID) + "-1-2",
                    username: "Ghe3lo_",
                    userPFP: require("./../../res/debug_img/userpfp1.png"),
                    reply: "I Agree!",
                    bodyImgs: [],
                    timestamp: Date.now() - 10 * 1000
                },
                {
                    replyID: String(content.contentID) + "-1-3",
                    username: "X3_nia",
                    userPFP: require("./../../res/debug_img/userpfp2.png"),
                    reply: "nahh... nah...",
                    bodyImgs: [],
                    timestamp: Date.now() - 5 * 1000
                },
            ]
        }
    ]

    useEffect(() => {
        for (let contentsItem of contents) {
            if (contentsItem.contentID == forumID) {
                setContent(contentsItem);
                break;
            }
        }
    }, []);

    return (
        <div className='w-full bg-gray-400 py-20'>
            <Body className="w-3/4 mx-auto p-10 shadow-md bg-gray-100 rounded-3xl">
                <table className="table-auto select-none">
                    <tbody>
                        <tr className=''>
                            <td className='w-10 h-10'> {/** Display the user pfp in the upperleft-most cell */}
                                <img
                                    src={content.userPFP}
                                    alt={"Profile picture of " + content.username}
                                    className='rounded-full w-10/12 h-10/12 mx-auto my-auto'
                                />
                            </td>
                            <td> {/** Display upload information beside the image such as: username, upload timestamp, and the topic */}
                                <div className='h-full align-contents-middle'>
                                    <p className='text-xs h-full'>{content.topic}&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(content.uploadTimestamp)}</span></p>
                                    <p className='text-xs'>{content.username}</p>
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
                                        content.bodyImgs.map((src, index) => {
                                            return (
                                                <img
                                                    key={index}
                                                    src={src}
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
                    <div className='flex bg-lgu-yellow w-fit p-2 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                            fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M16 12l-4-4-4 4M12 16V9" />
                        </svg>
                        <p className='text-sm mx-2'>0</p>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                            fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M16 12l-4 4-4-4M12 8v7" />
                        </svg>
                    </div>
                    {/** Comment info display */}
                    <div className='flex bg-lgu-yellow w-fit p-2 ml-10 rounded-full'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                            fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <p className='text-sm mx-2'>0</p>
                    </div>
                </div>

                {/** Add a comment */}
                <div className='flex bg-lgu-yellow w-fit p-2 mt-10 rounded-full select-none cursor-pointer hover:brightness-95' onClick={() => setAddComment(true)}>
                    + Add a Comment
                </div>
                {addComment ?
                    <div>
                        <div className='bg-gray-200 h-40 w-11/12 rounded-3xl mt-10'>
                            <textarea className='w-full h-full rounded-3xl p-3'
                                value={comment}
                                onChange={(e) => setComment(e.target.value)} />
                        </div>
                        <div className='flex mt-3'>
                            <div className='p-2 outline outline-2 outline-lgu-yellow rounded-full select-none cursor-pointer' onClick={() => setAddComment(false)}>Cancel</div>
                            <div className='p-2 ml-3 bg-lgu-yellow rounded-full select-none cursor-pointer'
                                onClick={() => {
                                    setAddComment(false);
                                    /** TODO: Save to database */
                                }}
                            >Comment</div>
                        </div>
                    </div>
                    :
                    null
                }
                <p className='text-gray-700 mt-10'>Comments</p>
                <div className='px-10 mt-5'>
                    {
                        comments.map((comment, index) => {
                            return (
                                <Comment key={index} comment={comment} />
                            )
                        })
                    }
                </div>
            </Body>
        </div>
    )
}

function Comment({ comment }) {
    return (
        <div>
            <table className="table-auto select-none mb-5">
                <tbody>
                    <tr className=''>
                        <td className='w-10 h-10'> {/** Display the user pfp in the upperleft-most cell */}
                            <img
                                src={comment.userPFP}
                                alt={"Profile picture of " + comment.username}
                                className='rounded-full w-10/12 h-10/12 mx-auto my-auto'
                            />
                        </td>
                        <td> {/** Display upload information beside the image such as: username, upload timestamp, and the topic */}
                            <div className='h-full align-contents-middle'>
                                <p className='text-sm h-full'>{comment.username}&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(comment.timestamp)}</span></p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td className=''>{comment.comment}</td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td>
                            <div className='w-full justify-center flex flex-wrap'>
                                {comment.bodyImgs !== undefined ?
                                    comment.bodyImgs.map((src, index) => {
                                        if (index < 3) {
                                            return (
                                                <img
                                                    key={index}
                                                    src={src}
                                                    className='w-32 h-auto pe-2 mx-auto justify-self mx-auto'
                                                />
                                            )
                                        } else if (index === 3) {
                                            let qty = comment.bodyImgs.length - 3
                                            return (
                                                <div className='w-32 h-32 relative'>
                                                    <p className='absolute z-40 text-3xl m-2 text-white w-32 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>+{qty}</p>
                                                    <img
                                                        key={index}
                                                        src={src}
                                                        className='w-32 h-32 pe-2 mx-auto justify-self mx-auto'
                                                    />
                                                </div>
                                            )
                                        }
                                    })
                                    :
                                    null
                                }
                            </div>
                            <div className='flex pt-2'>
                                {/** Up/Down voting system */}
                                <div className='flex bg-lgu-yellow w-fit p-2 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                                        fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M16 12l-4-4-4 4M12 16V9" />
                                    </svg>
                                    <p className='text-sm mx-2'>0</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                                        fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10" />
                                        <path d="M16 12l-4 4-4-4M12 8v7" />
                                    </svg>
                                </div>
                                {/** Comment info display */}
                                <div className='flex bg-lgu-yellow w-fit p-2 ml-10 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 24 24"
                                        fill="none" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                    <p className='text-sm mx-2'>0</p>
                                </div>
                            </div>
                        </td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
}