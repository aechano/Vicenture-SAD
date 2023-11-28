import React from 'react'

export default function Analytics() {
    return (
        <div className="flex">
            <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Web Analytics</h1>
            {/* First container */}
            <div className="w-10/11 ml-18 mt-4">
                {/* Container for First-Level and Investment-Related Activity */}
                <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-8 mt-16 mb-8 font-bold text-center">
                    <p className="mt-4">First-Level User Activity</p>
                </div>

                <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-8 mt-8 mb-8 font-bold text-center">
                    <p className="mt-4">New User Accounts</p>
                </div>
            </div>

            {/* Second container */}
            <div className="w-10/11 ml-16 mt-4">
                {/* Container for New User Account and User Account */}
                <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-2 mt-16 mb-8 font-bold text-center">
                    <p className="mt-4">Investment Related Activity</p>
                </div>

                <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-2 mt-8 mb-8 font-bold text-center">
                    <p className="mt-4">User Account</p>
                </div>
            </div>
        </div>
    )
}
