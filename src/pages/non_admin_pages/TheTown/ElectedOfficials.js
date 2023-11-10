import React from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';

export default function ElectedOfficials() {
    return (
        <>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Elected Officials</p>
            </Banner>

            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5'>

                <div className="flex flex-col my-4 items-center pb-5">

                    <div className='md:flex md:flex-row md:space-x-5 lg:space-x-0 space-y-2 md:space-y-0 lg:space-y-2 lg:block pb-2  '>
                        {/* Container 1 */}
                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-cover"
                                    src={require("../../../res/img/kai.png")}
                                    alt="Mayor"
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Kai L. Yaneza
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Vice Mayor
                                </p>
                            </div>
                        </div>

                        {/* Container 3 */}
                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-cover"
                                    src={require("../../../res/img/angelo.png")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Angelo M. Echano
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Vice Mayor
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* Containers 4, 5, and 6 (Horizontally aligned) */}
                    <div className="block md:flex md:flex-row md:flex-wrap md:justify-center lg:flex -m-2 ">
                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-cover"
                                    src={require("../../../res/img/angelo.png")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Angelo M. Echano
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Mayor
                                </p>
                            </div>
                        </div>

                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-cover"
                                    src={require("../../../res/img/angelo.png")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Angelo M. Echano
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Vice Mayor
                                </p>
                            </div>
                        </div>

                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-cover"
                                    src={require("../../../res/img/angelo.png")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Angelo M. Echano
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Vice Mayor
                                </p>
                            </div>
                        </div>
                    </div>


                </div>


            </div>







        </>
    );
}
