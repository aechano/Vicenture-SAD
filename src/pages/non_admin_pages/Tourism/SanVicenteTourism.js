import React from 'react'
import Banner from '../../../components/Banner'
import SocialMedia from '../../../components/SocialMedia'
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE'

export default function SanVicenteTourism() {
  return (
    <div >
      <div className='relative inline-block'>
        <Banner
          src={require("../../../res/img/LGU-PERS.jpg")}
          alt="Image of San Vicente LGU Municipal Building"
          searchBar={false}
          bannerType="special"
        >
        </Banner>
        <div className='absolute -bottom-28 left-1/2 transform -translate-x-1/2 rounded-xl max-w-4xl w-full h-auto bg-lgu-green '>
          <h1 className='text-3xl font-bold text-center text-lgu-lime pt-5'>Visit San Vicente</h1>
          <p className='text-center text-lgu-lime font-semibold p-5'>Explore the serene charm of San Vicente, Camarines Norte – a hidden gem where nature's beauty meets tranquil simplicity. Immerse yourself in the welcoming community and discover the wonders of Mananap Falls, a pristine oasis nestled deep within lush forests and towering mountains. Take a refreshing plunge into its crystal-clear, ice-cold waters, embark on a rafting adventure, and dare to climb to the top of the falls. Don't miss the thrill of the jumping point. Visit San Vicente today and experience the unspoiled beauty and thrilling adventures that await!</p>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-28'>
        <div className="w-auto p-4">
          <video className="w-full h-full p-4 shadow-md rounded-lg border-2 border-lgu-green" autoPlay loop controls muted>
            <source src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4" type="video/mp4" />
          </video>
        </div>

        <div>
          <div className="flex items-center pt-10">
            <div className="flex-grow border-b-4 border-gray-900"></div>
            <h1 className="lg:text-3xl font-bold p-0 text-2xl md:p-2 mb-0 mt-0">Let Us Guide You</h1>

          </div>

          <div className="flex relative ">
            <div className="flex flex-col md:flex-row items-start">
              <div className='relative'>
                <img className="w-auto h-auto rounded-xl" src={require('../../../res/img/girl.png')} alt="girl" />
              </div>
              <p className="text-black text-left pt-14 leading-10 pr-5">
                Welcome to the picturesque paradise of San Vicente, Camarines Norte! With its pristine waterfalls, lush landscapes, and vibrant culture, San Vicente offers a unique blend of adventure and relaxation. Let me be your gateway to the best of San Vicente, ensuring you experience the most authentic and memorable moments. To book your adventure, simply start by filling out our convenient online form that you can submit to our humble office, and let's embark on a fantastic journey together!
              </p>
            </div>
            <div className="absolute left-0 -bottom-14 m-5">
              <button className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                Go to Our Online Form
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
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
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-10 bg-lgu-green h-96 '>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
          <div className="flex items-center pt-5">
            <h1 className="text-lgu-lime lg:text-3xl font-bold p-0 text-2xl md:p-2 mb-0 mt-0">Content Feed</h1>
            <div className="flex-grow border-b-4 border-lgu-lime"></div>
          </div>

          <div className="grid grid-cols-2 md:flex-row items-start pt-5">
            <div className="flex justify-end pr-40">
              <div className='flex flex-col'>
                <img className="w-auto h-48 rounded-xl" src={require('../../../res/img/mountain.png')} alt="girl" />
                <div className="mx-auto m-5">
                  <button className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                    Go to Places To Visit
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
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
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-start pl-40">
              <div className='flex flex-col'>
                <img className="w-auto h-48 rounded-xl" src={require('../../../res/img/adventure.png')} alt="girl" />
                <div className="mx-auto m-5">
                  <button className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                    Go to Activities
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
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
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className="text-center pt-5 pb-5">
          <h1 className="lg:text-3xl font-bold p-0 text-2xl md:p-2 mb-0 mt-0">Follow Us on Our Social Media Accounts.</h1>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>


    </div>
  )
}
