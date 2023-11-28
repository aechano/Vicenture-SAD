import React from 'react'
import { BsFillHousesFill } from 'react-icons/bs'
import { FaChartBar, FaMoneyBillWave, FaScroll } from 'react-icons/fa'
import { RiSurveyFill } from 'react-icons/ri'
import { GiSiren } from 'react-icons/gi'
import { TbCoins, TbTrees } from 'react-icons/tb'
import { MdReport } from 'react-icons/md'
import { Outlet } from 'react-router'
import Body from '../../classifiers/Body'
import { NavLink } from 'react-router-dom'

export default function Admin() {

    return (
        <>
            <div className='fixed top-0 left-0 z-40 w-80 drop-shadow-md bg-white h-screen pt-10 ps-10 mt-20'> {/** This is the sidebar */}
                <h1 className='text-lgu-green text-xl'>
                    Admin Dashboard
                    <div className='w-11/12 h-1 bg-lgu-green rounded-full mt-5' /> {/** just a line below all the categories */}
                    <div className='overflow-y-auto max-h-[65vh]'>
                        <SidebarItems
                            title={{ name: "Analytics", to: "analytics" }}
                            icon={<FaChartBar className='h-auto' />}
                        />
                        <SidebarItems
                            title={{ name: "The Town", to: "the-town" }}
                            subtitles={[
                                { name: "Municipality Profile", to: "municipality-profile" },
                                { name: "Elected Officials", to: "elected-officials" },
                                { name: "Offices", to: "offices" },
                                { name: "Citizen Charter", to: "citizen-charter" }
                            ]}
                            icon={<BsFillHousesFill className='h-auto' />}
                        />
                        <SidebarItems
                            title={{ name: "Tourism", to: "tourism" }}
                            subtitles={[
                                { name: "Places To Visit", to: "places-to-visit" },
                                { name: "Activities", to: "activities" }
                            ]}
                            icon={<TbTrees className='h-auto' />}
                        />
                        <SidebarItems
                            title={{ name: "Invest", to: "invest" }}
                            subtitles={[
                                { name: "Investment Opportunities", to: "investment-opportunities" },
                                { name: "Reasons To Invest", to: "reasons-to-invest" }
                            ]}
                            icon={<TbCoins className='h-auto' />}
                        />
                        <SidebarItems
                            title={{ name: "Online Survey", to: "online-survey" }}
                            icon={<RiSurveyFill className='h-auto' />}
                        />
                        <SidebarItems
                            title={{ name: "Emergency", to: "emergency" }}
                            icon={<GiSiren className='h-auto' />}
                        />
                        <SidebarItems
                            title={{ name: "Transparency", to: "transparency" }}
                            icon={<FaScroll className='h-auto' />}
                        />
                        <SidebarItems
                            title={{ name: "Reported Contents", to: "reported-contents" }}
                            icon={<MdReport className='h-auto' />}
                        />
                    </div>
                    <div className='w-11/12 h-1 bg-lgu-green rounded-full mt-5' /> {/** just a line below all the categories */}
                </h1>
            </div>
            <div className='flex'> {/** This is the contents beside the sidebar */}
                <div className='grow overflow-y-auto ml-80'>
                    <Body className="mx-5">
                        <Outlet />
                    </Body>
                </div>
            </div>
        </>
    )
}

function SidebarItems({ title, subtitles, icon }) {
    return (
        <>
            <div
                className='w-full mt-3 ps-5'>
                <NavLink
                    to={title.to}
                    className="text-base">
                    <div className='flex align-center'>
                        {icon}
                        <span className='ml-4'>{title.name}</span>
                    </div>
                </NavLink>
            </div>
            {
                subtitles ?
                    subtitles.map((subtitle, index) => {
                        return (
                            <div
                                className='w-full mt-3 ps-14'>
                                <NavLink
                                    key={index}
                                    to={title.to+"/"+subtitle.to}
                                    className="text-sm">
                                    <div className='flex align-center'>
                                        {subtitle.name}
                                    </div>
                                </NavLink>
                            </div>
                        );
                    })
                    :
                    null
            }
        </>
    )
}
