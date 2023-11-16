import React from "react";

export default function AdminReportedContentsComponent() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Reported Contents</h1>
            <div className="flex flex-col justify-center ml-5">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                                <thead className="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600 items-center mx-auto justify-center items-center">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">ID</th>
                                        <th scope="col" className="px-6 py-4">Content Title</th>
                                        <th scope="col" className="px-6 py-4">Location</th>
                                        <th scope="col" className="px-6 py-4">Uploader</th>
                                        <th scope="col" className="px-6 py-4">Content</th>
                                        <th scope="col" className="px-6 py-4">Reports</th>
                                    </tr>
                                </thead>
                                <tbody className="mx-auto justify-center items-center">
                                    <tr className="border-b bg-lgu-lime dark:border-neutral-500 dark:bg-neutral-700">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                        <td className="whitespace-nowrap px-6 py-4">Content Title Here</td>
                                        <td className="whitespace-nowrap px-6 py-4">Forums and Discussions</td>
                                        <td className="whitespace-nowrap px-6 py-4">John Doe</td>
                                        <td className="whitespace-nowrap px-6 py-4">Click to View</td>
                                        <td className="whitespace-nowrap px-6 py-4">0</td>
                                    </tr>
                                    <tr className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                        <td className="whitespace-nowrap px-6 py-4">Content Title Here</td>
                                        <td className="whitespace-nowrap px-6 py-4">Forums and Discussions</td>
                                        <td className="whitespace-nowrap px-6 py-4">John Doe</td>
                                        <td className="whitespace-nowrap px-6 py-4">Click to View</td>
                                        <td className="whitespace-nowrap px-6 py-4">0</td>
                                    </tr>
                                    <tr className="border-b bg-lgu-lime dark:border-neutral-500 dark:bg-neutral-700">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                        <td className="whitespace-nowrap px-6 py-4">Content Title Here</td>
                                        <td className="whitespace-nowrap px-6 py-4">Forums and Discussions</td>
                                        <td className="whitespace-nowrap px-6 py-4">John Doe</td>
                                        <td className="whitespace-nowrap px-6 py-4">Click to View</td>
                                        <td className="whitespace-nowrap px-6 py-4">0</td>
                                    </tr>
                                    <tr className="border-b bg-white dark:border-neutral-500 dark:bg-neutral-600">
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">4</td>
                                        <td className="whitespace-nowrap px-6 py-4">Content Title Here</td>
                                        <td className="whitespace-nowrap px-6 py-4">Forums and Discussions</td>
                                        <td className="whitespace-nowrap px-6 py-4">John Doe</td>
                                        <td className="whitespace-nowrap px-6 py-4">Click to View</td>
                                        <td className="whitespace-nowrap px-6 py-4">0</td>
                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}