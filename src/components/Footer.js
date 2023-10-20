import React from "react";

function Footer() {
  return (
    <div className="w-full bg-lgu-green">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative items-center justify-between">
          <div className="flex flex-wrap py-3 items-start justify-between"> {/* Reduced vertical padding */}
            <div className="flex items-center">
              <img
                className="h-12 w-auto mt-5"
                src={require('./../res/img/logo.png')}
                alt="Your Company"
              />
              <div className="text-white ml-4 mt-5"> {/* Reduced left margin */}
                <span className="block text-lgu-lime text-lg ml-2 font-bold">
                  San Vicente,
                </span>
                <span className="text-lgu-lime text-lg ml-2 font-bold">
                  Camarines Norte
                </span>
              </div>
            </div>
            <div className="ml-4 md:ml-10 text-center">
              <span className="text-lgu-lime text-md font-bold">Quick Links</span>
              <div className="flex flex-col mt-1 ">
                <a className="text-lgu-lime hover:text-white" href="#">The Town</a>
                <a className="text-lgu-lime hover:text-white" href="#">Transparency Dashboard</a>
                <a className="text-lgu-lime hover:text-white" href="#">Tourism</a>
              </div>
            </div>
            <div className="ml-4 md:ml-10 text-center">
              <span className="text-lgu-lime text-md font-bold">Feedbacks</span>
              <div className="flex flex-col mt-1">
                <a className="text-lgu-lime hover:text-white" href="#">Contact Us</a>
                <a className="text-lgu-lime hover:text-white" href="#">Survey</a>
                <a className="text-lgu-lime hover:text-white" href="#">Forum</a>
              </div>
            </div>

            <div className="flex flex-col ml-4 md:ml-10 pb-3 text-center">
              <span className="text-lgu-lime text-md font-bold">Contacts</span>
              <div className="mt-1">
                <span className="text-lgu-lime">0912-345-6789</span>
              </div>
              <div>
                <span className="text-lgu-lime">username@gmail.com</span>
              </div>
            </div>
            <div className="ml-4 md:ml-10 text-center">
              <span className="text-lgu-lime text-md font-bold px-3">
                Connect With Us
              </span>
              <div className="flex py-1 mt-1 justify-center"> {/* Reduced vertical padding */}
                <a href="#">
                  <img
                    className="w-auto h-7 px-2 "
                    src={require('./../res/img/x.png')}
                  />
                </a>
                <a href="#">
                  <img
                    className="w-auto h-7 px-2"
                    src={require('./../res/img/facebook.png')}
                  />
                </a>
                <a href="#">
                  <img
                    className="w-auto h-7 px-2"
                    src={require('./../res/img/instagram.png')}
                  />
                </a>            
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="  p-4 text-center bg-lgu-green text-lgu-lime text-sm">
        <span>© 2023 Copyright</span>
      </div>      
    </div>
  );
}

export default Footer;
