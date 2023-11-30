import React from 'react'

export default function AdminEmergency() {
    return (
        <div className="ml-10 mt-6 mb-6 w-full flex-shrink-0 h-full overflow-auto" >

        <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Emergency Alert</h1>
        <div className="flex flex-wrap justify-stretch">
            <div className="relative mb-3 mx-2">
                <input
                    required
                    type="text"
                    className="peer m-0 block h-[58px] w-[500px] rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-black dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                    placeholder="Alert Title"
                />
                <label
                    className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-gray-300 dark:peer-focus:text-primary"
                >
                    Alert Title
                </label>
            </div>
                <div className="relative mb-3 mx-2">
                    <input
                        required
                        type="text"
                        className="peer m-0 block h-[58px] w-60 rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-black dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                        placeholder="Category"
                    />
                    <label
                        className="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-gray-300 dark:peer-focus:text-primary"
                    >
                        Category
                    </label>
                </div>
            </div>
            <div className="relative mb-3 mx-2">
                <textarea
                    className="peer m-0 block h-80 w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-300 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-black dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                    placeholder="Alert Message"
                />
            </div>
            <div className="pt-5 flex justify-end py-4">
                <button
                    type="submit"
                    className="text-black hover:text-white bg-lgu-green hover:bg-lime-900 focus:ring-1 focus:outline-none focus:ring-lime-900 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-lime-900 dark:focus:ring-lime-900"
                >
                    Send Message
                </button>

            </div>

            </div>
    )
}
