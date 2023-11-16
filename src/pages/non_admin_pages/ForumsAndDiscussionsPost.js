import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { timeAgo } from '../../functionHelpers/Time';
import Body from '../../classifiers/Body';
import CommentingSystem from '../../components/CommentingSystem';

export default function ForumsAndDiscussionsPost() {

    let { forumID } = useParams();
    const [content, setContent] = useState({});

    /** Sample contents to use useParams on */
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
            bodyImgs: [
                {src: require("./../../res/debug_img/xenia_content_imgs1.png"), alt:"notes 1"},
                {src: require("./../../res/debug_img/xenia_content_imgs3.png"), alt:"notes 2"},
                {src: require("./../../res/debug_img/xenia_content_imgs2.png"), alt:"notes 3"},
                {src: require("./../../res/debug_img/xenia_content_imgs1.png"), alt:"notes 4"},
                {src: require("./../../res/debug_img/xenia_content_imgs3.png"), alt:"notes 5"},
                {src: require("./../../res/debug_img/xenia_content_imgs3.png"), alt:"notes 6"}
            ]
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

    /** Retrieve content depending on (useParams) forumID value */
    useEffect(() => {
        for (let contentsItem of contents) {
            if (contentsItem.contentID === parseInt(forumID)) {
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
                <CommentingSystem content={forumID}/>
            </Body>
        </div>
    )
}