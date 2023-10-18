import React, { useRef, useEffect, useState } from "react";

function Homepage() {
  const imageSrc =
    "https://github.com/aechano/Vicenture-SAD/blob/main/src/res/img/LGU-PERS.jpg?raw=true";
  const imageAlt = "Mananap Falls";
  const overlayRef = useRef(null);
  const [overlayHeight, setOverlayHeight] = useState("auto");

  const containerStyle = {
    position: "relative",
  };

  const imageStyle = {
    width: "100%",
    objectFit: "cover",
  };

  const overlayStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textTransform: "uppercase",
  };

  const isSmallScreen = window.innerWidth <= 1180;

  return (
    <div style={containerStyle} className="relative flex items-center justify-center">
      <div className="h-full w-full relative overflow-hidden">
        <img style={imageStyle} src={imageSrc} alt={imageAlt} className="h-screen lg:h-auto brightness-50" />
        <div ref={overlayRef} style={overlayStyle}>
          <h1 className={`lg:text-6xl font-bold p-2 ${isSmallScreen ? "text-2xl" : "text-4xl"}`}>
            WELCOME TO SAN VICENTE,
          </h1>
          <h1 className={`lg:text-6xl font-bold p-2 ${isSmallScreen ? "text-2xl" : "text-4xl"}`}>
            CAMARINES NORTE
          </h1>
            <form className="w-9/12 lg:w-5/12 mt-5">   
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="What do you want to know?" required/>
                    <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
           </form>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
