import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom/dist';
import { API } from '../../../Variables/GLOBAL_VARIABLE';
import Cookies from 'js-cookie';

export default function AdminReportedContents() {
    const [reports, setReports] = useState([]);
    useEffect(() => {
        axios.get(API.reportGet, {
            headers: { "Authorization": `Bearer ${Cookies.get("token")}` },
            withCredentials: true
        })
            .then((response) => response.data)
            .then((data) => {
                setReports(data);
            })
    }, [])

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Reported Contents</h1>
            <div className="flex flex-col justify-center ml-5">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-center text-sm font-light">
                                <thead className="border-b bg-white font-medium items-center mx-auto justify-center items-center">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">ID</th>
                                        <th scope="col" className="px-6 py-4">Reported</th>
                                        <th scope="col" className="px-6 py-4">Reason</th>
                                        <th scope="col" className="px-6 py-4">Context</th>
                                        <th scope="col" className="px-6 py-4">Link</th>
                                        <th scope="col" className="px-6 py-4">Reports</th>
                                    </tr>
                                </thead>
                                <tbody className="mx-auto justify-center items-center">
                                    {reports.length > 0 ?
                                        reports.map((report, index) => {
                                            return <Entry
                                                key={index}
                                                id={index + 1}
                                                email={report.reported}
                                                reason={report.reason}
                                                context={report.context}
                                                link={report.link}
                                                reports={report.count}
                                            />
                                        })
                                        :
                                        <tr className={`border-b bg-lgu-lime`}>
                                            <td className="whitespace-nowrap px-6 py-4 font-medium w-full" colSpan="6">No reported cases.</td>
                                        </tr>
                                    }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Entry({ id, email, reason, context, link, reports }) {
    return (
        <tr className={`border-b ${id % 2 === 1 ? 'bg-lgu-lime' : 'bg-white'}`}>
            <td className="whitespace-nowrap px-6 py-4 font-medium w-1/12">{id}</td>
            <td className="whitespace-nowrap px-6 py-4 w-2/12">{email}</td>
            <td className="whitespace-nowrap px-6 py-4 w-3/12">{reason}</td>
            <td className="whitespace-nowrap px-6 py-4 w-3/12">{context ? context : "-"}</td>
            <td className="whitespace-nowrap px-6 py-4 w-2/12"><NavLink to={link}>{link}</NavLink></td>
            <td className="whitespace-nowrap px-6 py-4 w-1/12">{reports}</td>
        </tr>
    );
}