import React from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';

export default function ElectedOfficials() {
    return (
        <>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Elected Officials</p>
            </Banner>

            <div className="my-4 flex justify-center items-center">
                {/* Container 1 */}
                <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                        <img
                            className="rounded-t-lg object-cover"
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
                {/* Container 3 */}
                <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark-bg-neutral-700 my-2">
                    <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                        <img
                            className="rounded-t-lg object-cover"
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

            <div className="flex justify-center items-center">
                {/* Containers 4, 5, and 6 (Horizontally aligned) */}
                <div className="flex">
                    <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark-bg-neutral-700 mx-2">
                        <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                            <img
                                className="rounded-t-lg object-cover"
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

                    <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark-bg-neutral-700 mx-2">
                        <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                            <img
                                className="rounded-t-lg object-cover"
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

                    <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark-bg-neutral-700 mx-2">
                        <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                            <img
                                className="rounded-t-lg object-cover"
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
            </div>
        </>
    );
}
