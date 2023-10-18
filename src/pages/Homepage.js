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

  const isSmallScreen = window.innerWidth <= 1180;

  const containerStyle = {
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textTransform: "uppercase",
  };

  return (
    <div style={containerStyle} className="relative flex items-center justify-center">
      <div className="h-full w-full relative overflow-hidden">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-screen lg:h-auto w-full object-cover"
          />
        )}
        <div ref={overlayRef} style={overlayStyle}>
          <h1 className={`lg:text-6xl font-bold p-2 ${isSmallScreen ? "text-2xl" : "text-4xl"}`}>
            WELCOME TO SAN VICENTE,
          </h1>
          <h1 className={`lg:text-6xl font-bold p-2 ${isSmallScreen ? "text-2xl" : "text-4xl"}`}>
            CAMARINES NORTE
          </h1>
          <form className="w-9/12 lg:w-5/12 mt-5">
            {/* ... Your search form code ... */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
