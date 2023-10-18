import React, { useRef, useEffect, useState } from "react";

function Homepage() {
  const imageSrc =
    "https://github.com/aechano/Vicenture-SAD/blob/main/src/res/img/LGU-PERS.jpg?raw=true";
  const imageAlt = "Mananap Falls";
  const overlayRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = imageSrc;
    image.onload = () => {
      setLoading(false);
    };
  }, [imageSrc]);

  return (
    <div>
      <div className="relative flex items-center justify-center">
          <div className="h-full w-full relative overflow-hidden">
            {loading ? (
              <div></div>
            ) : (
              <img
                src={imageSrc}
                alt={imageAlt}
                className="h-screen lg:h-auto w-full object-cover"
              />
            )}
            <div ref={overlayRef} className="absolute inset-0 bg-opacity-50 bg-black flex flex-col items-center justify-center text-white">
              <h1 className="lg:text-6xl font-bold p-0 md:text-5xl text-2xl md:p-2 mb-0 mt-0">
                Welcome to San Vicente,
              </h1>
              <h1 className="lg:text-6xl font-bold p-0 md:text-5xl text-2xl md:p-2 mt-0">
                Camarines Norte
              </h1>
              <form className="w-7/12 lg:w-5/12 mt-5">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required/>
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enter</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
          <div className="flex items-center">
            <h1 className="lg:text-3xl font-bold p-0 text-2xl md:p-2 mb-0 mt-0">What's Happening?</h1>
            <div className="flex-grow border-b-4 border-gray-900"></div>
          </div>
          <div className="flex">
            <div className="w-[18rem] p-4 mt-5">
              <div className="p-4 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="border-b-2 border-[#0000002d] rounded-t-xl bg-emergency px-6 py-3 text-white dark:text-neutral-50 font-bold">
                  Emergency
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-black">
                    Success card title
                  </h5>
                  <p className="text-base text-black">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div className="p-4 mt-5 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <div className="border-b-2 border-[#0000002d] rounded-t-xl bg-event px-6 py-3 text-white dark:text-neutral-50 font-bold">
                  September
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-black">
                    Success card title
                  </h5>
                  <p className="text-base text-black">
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 pt-4 pb-4 pr-4 pl-4">
              <video class="w-full h-full rounded-2xl shadow-lg p-4" autoplay loop controls muted>
                <source src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className=" border-b-2 border-gray-900"></div>


        </div>

    </div>
    
  );
}

export default Homepage;
