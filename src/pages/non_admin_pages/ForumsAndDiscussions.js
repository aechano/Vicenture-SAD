import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Body from '../../classifiers/Body'
import { PATH_NAME } from '../../Variables/GLOBAL_VARIABLE'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { timeAgo } from '../../functionHelpers/Time'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateForumPost from './CreateForumPost'


export default function ForumsAndDiscussions() {
    /**
     * Side bar categories
     */
    const [show, setShow] = useState({});
    const { topic } = useParams();
    const [selectedTopic, setSelectedTopic] = useState("all");
    var category = [
        {
            id: 1,
            category: "Sports",
            icon: "",
            items: ["Basketball", "Coaching", "Sports Tourism"]
        },
        {
            id: 2,
            category: "Education",
            icon: "",
            items: ["LGU Assistance", "Peer-to-peer Helping", "Schools"]
        },
        {
            id: 3,
            category: "Tourism",
            icon: "",
            items: ["Falls", "Resorts", "Tour Guides"]
        }
    ]

    useEffect(() => {
        if (topic) {
            setSelectedTopic(decodeURIComponent(topic));
        } else {
            setSelectedTopic("all");
        }
    }, [topic]);

    useEffect(() => {
        console.log(selectedTopic);
    }, [selectedTopic]);

    const showChange = (category, value) => {
        setShow((prevState) => ({ ...prevState, [category]: value }));
    };
    useEffect(() => {
        category.map((category) => showChange(category.id, true));
    }, []);
    /**
     * contents from users
     */
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
                { src: require("./../../res/debug_img/xenia_content_imgs1.png"), alt: "notes 1" },
                { src: require("./../../res/debug_img/xenia_content_imgs3.png"), alt: "notes 2" },
                { src: require("./../../res/debug_img/xenia_content_imgs2.png"), alt: "notes 3" },
                { src: require("./../../res/debug_img/xenia_content_imgs1.png"), alt: "notes 4" },
                { src: require("./../../res/debug_img/xenia_content_imgs3.png"), alt: "notes 5" },
                { src: require("./../../res/debug_img/xenia_content_imgs3.png"), alt: "notes 6" }
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

    const navigate = useNavigate();
    return (
        <>

            <div className='fixed top-0 left-0 z-40 w-80 drop-shadow-md bg-white h-screen pt-10 ps-10 mt-20'> {/** This is the sidebar */}
                <h1 className='text-lgu-green text-xl'>
                    Topics
                    {category.map((category) => {
                        {/** iterate through category list and display each category using the DropDown component */ }
                        return <DropDown
                            key={category.id}
                            show={show[category.id]}
                            setShow={() => showChange(category.id, !show[category.id])}
                            category={category.category}
                            icon={category.icon}
                            items={category.items}
                        />
                    }
                    )}
                    <div className='w-11/12 h-1 bg-lgu-green rounded-full mt-5' /> {/** just a line below all the categories */}
                </h1>
            </div>
            <div className='flex'> {/** This is the contents beside the sidebar */}
                <div className='grow overflow-y-auto ml-80'>
                    <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                        <p>Forums and Discussions</p>
                    </Banner>
                    <Body className="mx-5">
                        <div className='w-fit rounded-full ms-5 my-10'>
                            <NavLink to='/create-post' className='bg-lgu-yellow text-black w-fit p-3 rounded-full'>
                                +&nbsp;&nbsp;&nbsp;Create A Post
                            </NavLink>

                        </div>
                        
                        {/*<Routes>
                            <Route path='/forums-and-discussions' element={<ForumsAndDiscussions />} />
                            <Route path='/create-post' element={<CreatePost />} />
                        </Routes>
                        </div>*/}

                        <div>
                            {
                                contents.map((content, index) => {
                                    {/** Iterate through the contents and use Post component to display it */ }
                                    return <Post key={index} content={content} />
                                })
                            }
                        </div>
                    </Body>
                </div>
            </div>
        </>
    )
}

function DropDown({ show, setShow, category, items, icon }) {
    /**
     * This is a component for Forums and Discussions to display the categories.
     * Attributes:
        * show
        * setShow
        * category
        * items
        * 
    */
    const navigate = useNavigate();
    return (
        <>
            <div className='px-10 mt-5 h-full w-full text-left justify-left flex content-start hover:bg-gray-100' onClick={() => setShow()}>
                <h1 className='flex-grow select-none text-base m-0'>{category}</h1>
                <ChevronDownIcon
                    className={'h-5 w-5 text-lgu-green my-auto transform ' + (show ? "rotate-180" : "")}
                />
            </div>
            {show ?
                <div className='select-none text-lgu-green text-sm'>
                    {items.map((item, index) => (
                        <p
                            className='px-14 hover:bg-gray-100'
                            key={index}
                            onClick={() => navigate(PATH_NAME.ForumsAndDiscussions + "/" + encodeURIComponent(item.toLowerCase()))}
                        >{item}</p>
                    ))
                    }
                </div>
                :
                null}
        </>
    );
}

function Post({ content }) {
    /**
     * This is a component used to display contents specific only to Forums and Discussions.
     * Attributes:
        * Contents
     */
    const navigate = useNavigate();
    return (
        <div
            className="drop-shadow-md rounded-3xl bg-gray-100 hover:bg-gray-200 p-5 mb-5 cursor-pointer"
            onClick={() => {
                navigate(PATH_NAME.ForumsAndDiscussionsPost + "/" + String(content.contentID));
                window.scrollTo({ top: 0, left: 0 });
            }}>
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
                                <p><span>{content.username}</span>&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(content.uploadTimestamp)}</span></p>
                                <p>{content.topic}</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td>{content.title}</td> {/** Display the title of the content */}
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td>{content.body.substring(0, 400).trim() + "..."}</td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                    </tr>
                    <tr>
                        <td></td> {/** Keep the cells below the image empty */}
                        <td>
                            <div className='flex overflow-x-auto justify-start'>
                                {content.bodyImgs !== undefined ?
                                    content.bodyImgs.map((img, index) => {
                                        if (index < 3) {
                                            return (
                                                <img
                                                    key={index}
                                                    src={img.src}
                                                    alt={img.alt}
                                                    className='w-40 h-40 m-2 shadow-md'

                                                />
                                            )
                                        } else if (index === 3) {
                                            let qty = content.bodyImgs.length - 3
                                            return (
                                                <div className='w-40 h-40 relative'>
                                                    <p className='absolute z-40 text-3xl m-2 text-white w-40 text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>+{qty}</p>
                                                    <img
                                                        key={index}
                                                        src={img.src}
                                                        alt={img.alt}
                                                        className='w-40 h-40 m-2 brightness-50 absolute shadow-md'
                                                    />
                                                </div>

                                            )
                                        } else return null;
                                    })
                                    :
                                    null
                                }
                            </div>
                        </td> {/** Display the first 400 characters of the body, trim it if it ends with a space, and add an ellipsis */}
                    </tr>

                </tbody>
            </table>
        </div >
    );
}