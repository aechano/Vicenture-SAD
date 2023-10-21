import React from "react";

function Footer() {
  return (
    <div className="w-full bg-lgu-green pt-8">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 pb-5">
        <div className="relative items-center justify-between">

          <footer>
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
              <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                  <a href="https://flowbite.com/" class="flex items-center">
                    <img src={require('./../res/img/logo.png')} class="h-12 w-auto mt-5 pr-2" alt="FlowBite Logo" />
                    <img src={require('./../res/img/transparency_seal.png')} class="h-12 w-auto mt-5 pr-2" alt="FlowBite Logo" />
                    <div className="text-white sm:ml-4 mt-5"> {/* Reduced left margin */}
                      <span className="block text-lgu-lime text-2xl sm:ml-2 font-bold">
                        San Vicente,
                      </span>
                      <span className="text-lgu-lime text-2xl sm:ml-2 font-bold">
                        Camarines Norte
                      </span>
                    </div>

                  </a>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                  <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-lgu-lime">Quick Links</h2>
                    <ul class="text-gray-500 dark:text-lgu-lime font-medium">
                      <li class="mb-2">
                        <a href="https://flowbite.com/" class="hover:underline">The Town</a>
                      </li>
                      <li className="mb-2">
                        <a href="https://tailwindcss.com/" class="hover:underline">Transparency</a>
                      </li>
                      <li>
                        <a href="https://tailwindcss.com/" class="hover:underline">Tourism</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-lgu-lime">Feedbacks</h2>
                    <ul class="text-gray-500 dark:text-lgu-lime font-medium">
                      <li class="mb-2">
                        <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Contact Us</a>
                      </li>
                      <li className="mb-2">
                        <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Survey</a>
                      </li>
                      <li>
                        <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Forum</a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-lgu-lime">Contacts</h2>
                    <ul class="text-gray-500 dark:text-lgu-lime font-medium">
                      <li class="mb-2">
                        <p>0912-345-6789</p>
                      </li>
                      <li>
                        <p>username@gmail.com</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <hr class="my-6 border-gray-200 sm:mx-auto dark:border-lgu-lime lg:my-8" />
              <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-lgu-lime">Copyright Ⓒ 2023. Municipal Government of San Vicente, Camarines Norte | All Rights Reserved.
                </span>
                <div class="flex mt-4 sm:justify-center sm:mt-0">
                  <h1 className="text-sm text-gray-500 sm:text-center dark:text-lgu-lime m-2">Contact Us</h1>
                  <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <img
                      className="w-auto h-7 px-2 "
                      src={require('./../res/img/x.png')}
                    />
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <img
                      className="w-auto h-7 px-2"
                      src={require('./../res/img/facebook.png')}
                    />
                  </a>
                  <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <img
                      className="w-auto h-7 px-2"
                      src={require('./../res/img/instagram.png')}
                    />
                  </a>

                </div>
              </div>
            </div>
          </footer>

        </div>
      </div>

    </div>
  );
}

export default Footer;
