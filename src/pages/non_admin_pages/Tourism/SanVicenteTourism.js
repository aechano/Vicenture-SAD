import React from 'react';
import Banner from '../../../components/Banner';
import SocialMedia from '../../../components/SocialMedia';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import { NavLink } from 'react-router-dom';
import BackToTop from '../../../components/BackToTop';
import RevealOnScroll from '../../../components/RevealOnScroll';

export default function SanVicenteTourism() {
  return (
    <div >
      <div className='relative inline-block'>
        <Banner
          src={require("../../../res/img/i-love-sv.png")}
          alt="Image of San Vicente LGU Municipal Building"
          searchBar={false}
          bannerType="special"
        >
        </Banner>

        <div className='absolute -bottom-28 left-1/2 transform -translate-x-1/2 rounded-xl max-w-4xl w-full h-auto bg-lgu-green '>
          <h1 className='text-3xl font-bold text-center text-lgu-lime pt-5'>Visit San Vicente</h1>
          <p className='text-center text-lgu-lime p-5'>Explore the serene charm of San Vicente, Camarines Norte – a hidden gem where nature's beauty meets tranquil simplicity. Immerse yourself in the welcoming community and discover the wonders of Mananap Falls, a pristine oasis nestled deep within lush forests and towering mountains. Take a refreshing plunge into its crystal-clear, ice-cold waters, embark on a rafting adventure, and dare to climb to the top of the falls. Don't miss the thrill of the jumping point. Visit San Vicente today and experience the unspoiled beauty and thrilling adventures that await!</p>
        </div>
        
      </div>
      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-28 space-y-5'>
        <div className="w-auto p-4">
          <video className="w-full h-full p-4 shadow-md rounded-lg border-2 border-lgu-green" autoPlay loop controls muted>
            <source src={require("../../../res/vid/san-vicente.mp4")} type="video/mp4" />
          </video>
        </div>

        <RevealOnScroll>
          <div className=' hidden sm:block m-4 pb-10'>
            <div className='relative'>
              <img src={require('../../../res/img/tara.png')} className='rounded-md' />
              <div style={{ position: 'absolute', bottom: '5%', left: '5%' }}>
                <NavLink to={PATH_NAME.TheTown.Offices} className="inline-flex items-center justify-center w-full px-4 md:px-8 md:py-4 text-base font-bold leading-6 text-white bg-lgu-green border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                  Go to Tourism Office
                </NavLink>
              </div>
            </div>
          </div>
        </RevealOnScroll>
        <div className='m-4 flex relative bg-fixed bg-cover'
          style={{
            backgroundImage: "url(" + require("../../../res/img/aerial_view.png") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}>
          <div className="absolute inset-0 bg-gray-600 bg-opacity-70"></div>
          <div>
            <iframe className=' hidden sm:block relative z-10 p-5 sm:p-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15478.451159498574!2d122.85636726278433!3d14.10002034256915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398a5c6ea69eca5%3A0x8eb101096d9967b5!2sSan%20Vicente%2C%20Camarines%20Norte!5e0!3m2!1sen!2sph!4v1700071816660!5m2!1sen!2sph" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <div className='sm:hidden lg:block p-5 text self-center relative z-10 text-white'>
            <h1 className='font-bold text-5xl'>Find the Town</h1>
            <h1 className='font-bold text-4xl'>of</h1>
            <h1 className='font-bold text-4xl'>Discovery and Adventure</h1>
            <NavLink to={PATH_NAME.Tourism.OnlineForm} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="md:hidden text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300 mt-3">
              View Map
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
            </NavLink>
          </div>
        </div>
        <RevealOnScroll>
          <div>
            <div className="flex items-center pt-10">
              <img className="w-auto" src={require('../../../res/img/title.png')} alt="title" />
            </div>
            <div className='p-7'>
              <div className=''>
                <img className="" src={require('../../../res/img/form.png')} alt="form" />
              </div>
              <div>
                <p className="text-black text-justify pt-2 leading-10">
                  Welcome to the picturesque paradise of San Vicente, Camarines Norte! With its pristine waterfalls, lush landscapes, and vibrant culture, San Vicente offers a unique blend of adventure and relaxation. Let me be your gateway to the best of San Vicente, ensuring you experience the most authentic and memorable moments. To book your adventure, simply start by filling out our convenient online form that you can submit to our humble office, and let's embark on a fantastic journey together!
                </p>
                <NavLink to={PATH_NAME.Tourism.OnlineForm} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="mt-4 mb-7 transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
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
                </NavLink>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>


      <div className='relative bg-fixed bg-cover'
            style={{
            backgroundImage: "url(" + require("../../../res/img/tourism_cover.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            }}>

            <div className="absolute inset-0 bg-gray-600 bg-opacity-70"></div>
                    <RevealOnScroll>
                    <div className="text-center pt-5 pb-5">
                        <h1 className="lg:text-5xl font-bold p-0 text-4xl md:p-2 mb-0 mt-0 relative z-10 text-white">Must Have for Your Next Chapter</h1>
                    </div>
                    </RevealOnScroll>

                    
            <div className='grid grid-cols-1 md:grid-cols-4 gap-10 md:flex md:flex-wrap md:justify-center relative z-10 p-5'>

                
            <RevealOnScroll>
                <div class="relative grid h-[30rem] w-full max-w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-auto">
                    <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
                    style={{
                        backgroundImage: "url(" + require('../../../res/img/business_invest.jpeg') + ")",
                    }}
                    >
                    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div class="relative p-6 md:px-12 md:py-14">
                    <h2 class="mb-6 block text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                    Invest Wisely, Thrive Lavishly at San Vicente, Awaits You!
                    </h2>
                    <div className="mx-auto m-5">
                        <NavLink to={PATH_NAME.Invest.InvestmentOpportunities} onClick={() => window.scrollTo({ top: 0, left: 0 })} className=" transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                        Go to Invest Page
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
                        </NavLink>
                    </div>
                    </div>
                </div>
                </RevealOnScroll>
                <RevealOnScroll>
                <div class="relative grid h-[30rem] w-full max-w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-auto">
                    <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
                    style={{
                        backgroundImage: "url(" + require('../../../res/img/sample_falls.jpeg') + ")",
                    }}
                    >
                    <div class="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div class="relative p-6 md:px-12 md:py-14">
                    <h2 class="mb-6 block text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        Wanna Know our Tourist Spots, Festivals, and Resorts?
                    </h2>
                    <div className="mx-auto m-5">
                        <NavLink to={PATH_NAME.Tourism.PlacesToVisit} onClick={() => window.scrollTo({ top: 0, left: 0 })} className=" transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
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
                        </NavLink>
                    </div>
                    </div>
                </div>
                </RevealOnScroll>

                <RevealOnScroll>
                <div class="relative grid h-[30rem] w-full max-w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-auto">
                    <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
                    style={{
                        backgroundImage: "url(" + require('../../../res/img/hiking.jpg') + ")",
                    }}
                    >
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 md:px-12 md:py-14">
                    <h2 className="mb-6 block text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        Let's embark on exciting adventures and engage in enjoyable activities!
                    </h2>
                    <div className="mx-auto m-5">
                        <NavLink to={PATH_NAME.Tourism.Activities} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
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
                        </NavLink>
                    </div>
                    </div>
                </div>
                </RevealOnScroll>

                <RevealOnScroll>
                <div className="relative grid h-[30rem] w-full max-w-[21rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 mx-auto">
                    <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-cover bg-clip-border bg-center text-gray-700 shadow-none"
                    style={{
                        backgroundImage: "url(" + require('../../../res/img/dunk.jpeg') + ")",
                    }}
                    >
                    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 md:px-12 md:py-14">
                    <h2 className="mb-6 block text-3xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        Contribute your enthusiasm and expertise by joining in various sports festivals
                    </h2>
                    <div className="mx-auto m-2">
                        <NavLink to={PATH_NAME.TheTown.MunicipalityPrograms} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="transition-all duration-400 hover:scale-110 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                        Go to Sports Activities
                        <svg
                            className="w-3.5 h-3 ml-3"
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
                        </NavLink>
                    </div>
                    </div>


                </div>
                </RevealOnScroll>
                </div>

            </div>

      <div className=''>
        <div className="text-center pt-5 pb-5">
          <h1 className="lg:text-4xl font-bold p-0 text-3xl md:p-2 mb-0 mt-0">Follow Us on Our Social Media Accounts.</h1>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>

      <BackToTop />
    </div >
  )
}
