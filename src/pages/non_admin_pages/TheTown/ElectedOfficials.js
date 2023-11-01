import React from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';

export default function ElectedOfficials() {
    return (
        <>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Elected Officials</p>
            </Banner>

            <div className="my-4 flex justify-center items-center"> {/* Add margin to create space below the banner */}
                <div className="block w-[18rem] h-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative overflow-hidden">
                        <img
                            className="rounded-t-lg object-cover h-1/2 w-full" // Set a fixed height and use object-cover
                            src={require("../../../res/img/kai.png")}
                            alt="Mayor"
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-lg text-neutral-600 dark:text-neutral-200 text-center font-bold">
                            Kai L. Yaneza
                        </p>
                        <p className="text-sm text-neutral-400 dark:text-neutral-300 text-center font-bold">
                            Vice Mayor
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center">
                <div className="block w-[18rem] h-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 my-2">
                    <div className="relative overflow-hidden">
                        <img
                            className="rounded-t-lg object-cover h-1/2 w-full" // Set a fixed height and use object-cover
                            src={require("../../../res/img/angelo.png")}
                            alt=""
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-lg text-neutral-600 dark:text-neutral-200 text-center font-bold">
                            Angelo M. Echano
                        </p>
                        <p className="text-sm text-neutral-400 dark:text-neutral-300 text-center font-bold">
                            Vice Mayor
                        </p>
                    </div>
                </div>
            </div>

            <div className="my-4 flex justify-center items-center"> {/* Add margin to create space above the three cards */}
                <div className="block w-[18rem] h-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-2"> {/* Add mx-2 to create spacing between the three cards */}
                    <div className="relative overflow-hidden">
                        <img
                            className="rounded-t-lg object-cover h-1/2 w-full" // Set a fixed height and use object-cover
                            src={require("../../../res/img/francy.png")}
                            alt=""
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-lg text-neutral-600 dark:text-neutral-200 text-center font-bold">
                            Francyvelle C. Sy
                        </p>
                        <p className="text-sm text-neutral-400 dark:text-neutral-300 text-center font-bold">
                            Vice Mayor
                        </p>
                    </div>
                </div>

                <div className="block w-[18rem] h-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-2">
                    <div className="relative overflow-hidden">
                        <img
                            className="rounded-t-lg object-cover h-1/2 w-full" // Set a fixed height and use object-cover
                            src={require("../../../res/img/xenia.png")}
                            alt=""
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-lg text-neutral-600 dark:text-neutral-200 text-center font-bold">
                            Xenia Angelica D. Velacruz
                        </p>
                        <p className="text-sm text-neutral-400 dark:text-neutral-300 text-center font-bold">
                            Vice Mayor
                        </p>
                    </div>
                </div>

                <div className="block w-[18rem] h-[22rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-2">
                    <div className="relative overflow-hidden">
                        <img
                            className="rounded-t-lg object-cover h-1/2 w-full" // Set a fixed height and use object-cover
                            src={require("../../../res/img/josevhel.png")}
                            alt=""
                        />
                    </div>
                    <div className="p-6">
                        <p className="text-lg text-neutral-600 dark:text-neutral-200 text-center font-bold">
                            Josevhel A. Sancho
                        </p>
                        <p className="text-sm text-neutral-400 dark:text-neutral-300 text-center font-bold">
                            Vice Mayor
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
