import React from 'react'
import { NavLink } from 'react-router-dom'
import WebpagePath from '../../components/WebpagePath'
import Banner from '../../components/Banner'
import Body from '../../classifiers/Body'

export default function ForumsAndDiscussions() {
  var contents = [
    {
      contentID: 1042,
      email: "gheeelo@gmail.com",
      title: "San Vicente - A Forum Example",
      body: "San Vicente, a hidden gem nestled in the heart of Camarines Norte, is a place of serene beauty and natural wonder. This tranquil town, often overshadowed by more prominent tourist destinations in the Philippines, holds a secret that is waiting to be discovered - the breathtaking Mananap Falls. San Vicente, with its lush greenery, pristine rivers, and warm, welcoming locals, offers an ideal escape from the hustle and bustle of city life. The town is a haven for nature lovers and adventure seekers, with a wealth of natural attractions to explore. Among these, Mananap Falls stands out as one of the most captivating and enchanting sites in the region. Mananap Falls is a cascading masterpiece of nature, with its crystalline waters tumbling down a series of rocky terraces, creating a mesmerizing visual and auditory spectacle. The falls are surrounded by a lush tropical forest, where exotic flora and fauna thrive, adding to the mystical aura of the place.",
      images: [{ src: require("./../../res/img/waterfalls.png"), alt: "waterfalls" }, { src: "", alt: "" }],
      tags: ["tag1", "tag2"]
    },
    {
      contentID: 1043,
      email: "gheeelo@gmail.com",
      title: "San Vicente - A Forum Example 2",
      body: "A hidden gem nestled in the heart of Camarines Norte, is a place of serene beauty and natural wonder. This tranquil town, often overshadowed by more prominent tourist destinations in the Philippines, holds a secret that is waiting to be discovered - the breathtaking Mananap Falls. San Vicente, with its lush greenery, pristine rivers, and warm, welcoming locals, offers an ideal escape from the hustle and bustle of city life. The town is a haven for nature lovers and adventure seekers, with a wealth of natural attractions to explore. Among these, Mananap Falls stands out as one of the most captivating and enchanting sites in the region. Mananap Falls is a cascading masterpiece of nature, with its crystalline waters tumbling down a series of rocky terraces, creating a mesmerizing visual and auditory spectacle. The falls are surrounded by a lush tropical forest, where exotic flora and fauna thrive, adding to the mystical aura of the place.",
      tags: ["tag1", "tag2"]

    },
    {
      contentID: 1043,
      email: "gheeelo@gmail.com",
      title: "San Vicente - A Forum Example 3",
      body: "Camarines Norte, is a place of serene beauty and natural wonder. This tranquil town, often overshadowed by more prominent tourist destinations in the Philippines, holds a secret that is waiting to be discovered - the breathtaking Mananap Falls. San Vicente, with its lush greenery, pristine rivers, and warm, welcoming locals, offers an ideal escape from the hustle and bustle of city life. The town is a haven for nature lovers and adventure seekers, with a wealth of natural attractions to explore. Among these, Mananap Falls stands out as one of the most captivating and enchanting sites in the region. Mananap Falls is a cascading masterpiece of nature, with its crystalline waters tumbling down a series of rocky terraces, creating a mesmerizing visual and auditory spectacle. The falls are surrounded by a lush tropical forest, where exotic flora and fauna thrive, adding to the mystical aura of the place.",
      images: ["", ""],
      tags: ["tag1", "tag2"]

    },
  ]
  return (
    <>
      <Banner bottomLeft={true} searchBar={true}>
        <h1>Forums and Discussions</h1>
      </Banner>
      <Body className="mx-5">
        <WebpagePath previous={[{ title: "Home", to: "/" },]} className="pt-5"> Forums and Discussions </WebpagePath>
        <div className='w-fit rounded-full ms-5 my-10'>
          <NavLink className='bg-lgu-yellow text-black w-fit p-3 rounded-full'>
            +&nbsp;&nbsp;&nbsp;Create A Post
          </NavLink>
        </div>
        {
          contents.map((content, index) => (
            <div key={content.contentID} className='flex h-60 bg-gray-100 rounded-3xl my-5 drop-shadow-md hover:brightness-95'>
              {content.images ?
                <img
                  src={content.images[0].src}
                  alt={content.images[0].alt}
                  className='h-full w-60 rounded-l-3xl' />
                :
                null
              }
              <div className='flex-initial w-full ms-5 mt-5'>
                <h1 className='font-bold'>
                  {content.title}
                </h1>
                <p>
                  {content.body}
                </p>
              </div>
            </div>
          ))
        }
      </Body>
    </>
  )
}
