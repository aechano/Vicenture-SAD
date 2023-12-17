import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Body from '../../classifiers/Body'
import { API, PATH_NAME } from '../../Variables/GLOBAL_VARIABLE'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { timeAgo } from '../../functionHelpers/Time'
import axios from 'axios'


export default function ForumsAndDiscussions() {
    /**
     * Side bar categories
     */
    const [show, setShow] = useState({});
    const { topic } = useParams();
    const [selectedTopic, setSelectedTopic] = useState("all");
    const [contents, setContents] = useState([]);
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
        console.log(topic);
        if (topic) {
            setSelectedTopic(decodeURIComponent(topic));
        } else {
            setSelectedTopic("all");
        }
    }, []);

    useEffect(() => {
        axios.get(API.getForum(selectedTopic), {})
            .then((response) => response.data)
            .then((data) => {
                setContents(data);
            })
    }, [selectedTopic]);

    const showChange = (category, value) => {
        setShow((prevState) => ({ ...prevState, [category]: value }));
    };
    useEffect(() => {
        category.map((category) => showChange(category.id, true));
        axios.get(API.getForum(selectedTopic), {})
            .then((response) => response.data)
            .then((data) => {
                setContents(data);
            })
    }, []);
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
                            <NavLink to={PATH_NAME.CreatePost} className='bg-lgu-yellow text-black w-fit p-3 rounded-full'>
                                +&nbsp;&nbsp;&nbsp;Create A Post
                            </NavLink>

                        </div>
                        <div>
                            {
                                contents.map((content, index) => {
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
                                src={content.user.profilePicture ? 'data:image/jpeg;base64,' + content.user.profilePicture : require("./../../res/img/icon.png")}
                                alt={"Profile picture of " + content.user.accountUsername}
                                className='rounded-full w-10/12 h-10/12 mx-auto my-auto'
                            />
                        </td>
                        <td> {/** Display upload information beside the image such as: username, upload timestamp, and the topic */}
                            <div className='mb-2'>
                                <p><span>{content.user.accountUsername}</span>&nbsp;&nbsp;&nbsp;<span className='text-gray-500'>{timeAgo(content.uploadTimestamp)}</span></p>
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