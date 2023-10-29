import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { timeAgo } from '../../functionHelpers/Time';
import Body from '../../classifiers/Body';

export default function ForumsAndDiscussionsPost() {

    let { forumID } = useParams();
    const [content, setContent] = useState({});

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
            bodyImgs: [require("./../../res/debug_img/xenia_content_imgs1.png"), require("./../../res/debug_img/xenia_content_imgs3.png"), require("./../../res/debug_img/xenia_content_imgs2.png"), require("./../../res/debug_img/xenia_content_imgs1.png"), require("./../../res/debug_img/xenia_content_imgs3.png"), require("./../../res/debug_img/xenia_content_imgs3.png")]
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

    useEffect(() => {
        console.log(forumID);
        for (let contentsItem of contents) {
            if (contentsItem.contentID == forumID) {
                setContent(contentsItem);
                break;
            }
        }
    }, []);

    return (
        <Body className="m-10 mt-32 p-10 shadow-md bg-gray-100 rounded-3xl">
            <table className="table-auto select-none">
                <tbody>
                    <tr className=''>
                        <td className='w-16 h-16'> {/** Display the user pfp in the upperleft-most cell */}
                            <img
                                src={content.userPFP}
                                alt={"Profile picture of " + content.username}
                                className='rounded-full w-10/12 h-10/12 mx-auto my-auto'
                            />
                        </td>
                        <td> {/** Display upload information beside the image such as: username, upload timestamp, and the topic */}
                            <div className='mb-2'>
                                <p>{content.topic}&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(content.uploadTimestamp)}</span></p>
                                <p>{content.username}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td className='text-3xl'>{content.title}</td> {/** Display the title of the content */}
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td className='p-10'>{content.body}</td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td>
                            <div className='w-full justify-center p-10'>
                                {content.bodyImgs !== undefined ?
                                    content.bodyImgs.map((src, index) => {
                                        return (
                                            <img
                                                key={index}
                                                src={src}
                                                className='w-auto h-auto m-5 shadow-md'
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
        </Body>
    )
}
