import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Banner from '../../components/Banner'
import Body from '../../classifiers/Body'
import { PATH_NAME } from '../../Variables/GLOBAL_VARIABLE'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function ForumsAndDiscussions() {
  /**
   * Side bar categories
   */
  const [show, setShow] = useState({});
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
    },
    {
      id: 4,
      category: "Other",
      icon: "",
      items: ["Other1", "Other2", "Other3"]
    }
  ]
  const showChange = (category, value) => {
    setShow((prevState) => ({ ...prevState, [category]: value }));
  };
  useEffect(() => {
    category.map((category) => {
      showChange(category.id, true);
    });
  }, []);
  /**
   * contents from users
   */
  var contents = [
    {
      username: "Ghe3lo_",
      userPFP: require("./../../res/debug_img/userpfp1.png"),
      uploadTimestamp: Date.now() - 2 * 60 * 1000, // 1 second: 1000
      topic: "Sports Tourism",
      title: "Joining The LGU-SV Basketball Team",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
    },
    {
      username: "X3_nia",
      userPFP: require("./../../res/debug_img/userpfp2.png"),
      uploadTimestamp: Date.now() - 23 * 60 * 60 * 1000, // 1 second: 1000
      topic: "Peer-to-peer Helping",
      title: "Sharing My Notes When I Was in College Pt.2",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
    },
    {
      username: "J0si3x_x",
      userPFP: require("./../../res/debug_img/userpfp4.png"),
      uploadTimestamp: Date.now() - 24 * 60 * 60 * 1000, // 1 second: 1000
      topic: "Falls",
      title: "Reasons Why I Keep Visiting The Mananap Falls",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
    },
    {
      username: "Fr4ncyyy",
      userPFP: require("./../../res/debug_img/userpfp3.png"),
      uploadTimestamp: Date.now() - 7 * 24 * 60 * 60 * 1000, // 1 second: 1000
      topic: "Coaching",
      title: "Nahire Ako Bilang Isang Coach ng LGU Sports Team!",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
    },
    {
      username: "Th3Skyler08",
      userPFP: require("./../../res/debug_img/userpfp5.png"),
      uploadTimestamp: Date.now() - 3 * 4 * 7 * 24 * 60 * 60 * 1000, // 1 second: 1000
      topic: "Resorts",
      title: "Check Out My Resort Here in San Vicente; Check In Now!",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. In cursus turpis massa tincidunt dui ut ornare lectus. Cursus in hac habitasse platea dictumst quisque sagittis purus. Quam pellentesque nec nam aliquam sem et tortor consequat id. Arcu risus quis varius quam quisque id. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. Quam id leo in vitae turpis massa sed elementum. Sed augue lacus viverra vitae congue eu consequat ac. Lectus urna duis convallis convallis tellus id interdum velit laoreet.",
    },
  ]
  return (
    <>
      <div className='fixed top-0 left-0 z-40 w-80 drop-shadow-md bg-white h-screen pt-10 ps-10 mt-20'> {/** This is the sidebar */}
        <h1 className='text-lgu-green text-xl'>
          Topics
          {category.map((category) => {
            {/** iterate through category list and display each category using the DropDown component */ }
            return (
              <DropDown
                key={category.id}
                show={show[category.id]}
                setShow={() => showChange(category.id, !show[category.id])}
                category={category.category}
                icon={category.icon}
                items={category.items}
              />
            )
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
              <NavLink className='bg-lgu-yellow text-black w-fit p-3 rounded-full'> {/** Button for Creating a post */}
                +&nbsp;&nbsp;&nbsp;Create A Post
              </NavLink>
            </div>
            <div>
              {
                contents.map((content, index) => {  {/** Iterate through the contents and use Post component to display it */}
                  return (
                    <Post key={index} content={content} />
                  )
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
      * icon (unfinished)
      * 
  */
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
          {items.map((items, index) => (
            <p className='px-14 hover:bg-gray-100' key={index}>{items}</p>
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
  return (
    <div className="drop-shadow-md rounded-3xl bg-gray-100 hover:bg-gray-200 p-5 mb-5">
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
        </tbody>
      </table>
    </div>
  );
}

function timeAgo(timestamp) {
  /**
   * This is a function to convert timestamps into human-readable text
   */
  const date = new Date(timestamp);
  const currentTime = new Date().getTime();
  const timestampTime = date.getTime();
  const timeDifference = currentTime - timestampTime;

  // Define time intervals in milliseconds
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;

  if (timeDifference < minute) {
    return 'Just now';
  } else if (timeDifference < hour) {
    const minutes = Math.floor(timeDifference / minute);
    return minutes + (minutes === 1 ? ' minute ago' : ' minutes ago');
  } else if (timeDifference < day) {
    const hours = Math.floor(timeDifference / hour);
    return hours + (hours === 1 ? ' hour ago' : ' hours ago');
  } else if (timeDifference < week) {
    const days = Math.floor(timeDifference / day);
    return days + (days === 1 ? ' day ago' : ' days ago');
  } else if (timeDifference < month) {
    const weeks = Math.floor(timeDifference / week);
    return weeks + (weeks === 1 ? ' week ago' : ' weeks ago');
  } else {
    const readable_month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const readable_day = date.getDate().toString().padStart(2, '0');
    const readable_year = date.getFullYear();
    return `${readable_month}/${readable_day}/${readable_year}`
  }
}