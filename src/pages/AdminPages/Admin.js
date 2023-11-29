import React, { useEffect, useState } from 'react'
import { BsFillHousesFill } from 'react-icons/bs'
import { FaChartBar, FaScroll } from 'react-icons/fa'
import { RiSurveyFill } from 'react-icons/ri'
import { GiSiren } from 'react-icons/gi'
import { TbCoins, TbTrees } from 'react-icons/tb'
import { MdReport } from 'react-icons/md'
import { Outlet, useLocation } from 'react-router'
import Body from '../../classifiers/Body'
import { NavLink } from 'react-router-dom'
import { PATH_NAME, USER_TYPES } from '../../Variables/GLOBAL_VARIABLE'
import Cookies from 'js-cookie'
import Page403 from '../Accounts/ErrorPages/Page403'
import { jwtDecode } from 'jwt-decode'

export default function Admin() {
    const [hasAuthority, setHasAuthority] = useState(false);
    const location = useLocation();
    useEffect(() => {
        var jwt = Cookies.get("token");
        if (jwt) {
            var payload = jwtDecode(jwt);
            if (payload.AccountType !== USER_TYPES.Admin) {
                setHasAuthority(false);
            } else {
                setHasAuthority(true);
            }
        } else {
            setHasAuthority(false);
        }
    }, [])

    return (
        hasAuthority ?
            <>
                <div className='fixed top-0 left-0 z-40 w-80 drop-shadow-md bg-white h-screen pt-10 ps-10 mt-20'> {/** This is the sidebar */}
                    <h1 className='text-lgu-green text-xl'>
                        Admin Dashboard
                        <div className='w-11/12 h-1 bg-lgu-green rounded-full mt-5' /> {/** just a line below all the categories */}
                        <div className='overflow-y-auto max-h-[65vh]'>
                            <SidebarItems
                                title={{ name: "Analytics", to: PATH_NAME.AdminPages.Analytics }}
                                icon={<FaChartBar className='h-auto' />}
                            />
                            <SidebarItems
                                title={{ name: "The Town", to: PATH_NAME.AdminPages.TheTown }}
                                subtitles={[
                                    { name: "Municipality Profile", to: PATH_NAME.AdminPages.MunicipalityProfile },
                                    { name: "Elected Officials", to: PATH_NAME.AdminPages.ElectedOfficials },
                                    { name: "Offices", to: PATH_NAME.AdminPages.Offices },
                                    { name: "Citizen Charter", to: PATH_NAME.AdminPages.CitizensCharter }
                                ]}
                                icon={<BsFillHousesFill className='h-auto' />}
                            />
                            <SidebarItems
                                title={{ name: "Tourism", to: PATH_NAME.AdminPages.Tourism }}
                                subtitles={[
                                    { name: "Places To Visit", to: PATH_NAME.AdminPages.PlacesToVisit },
                                    { name: "Activities", to: PATH_NAME.AdminPages.Activities }
                                ]}
                                icon={<TbTrees className='h-auto' />}
                            />
                            <SidebarItems
                                title={{ name: "Invest", to: PATH_NAME.AdminPages.Invest }}
                                subtitles={[
                                    { name: "Investment Opportunities", to: PATH_NAME.AdminPages.InvestmentOpportunities },
                                    { name: "Reasons To Invest", to: PATH_NAME.AdminPages.ReasonsToInvest }
                                ]}
                                icon={<TbCoins className='h-auto' />}
                            />
                            <SidebarItems
                                title={{ name: "Online Survey", to: PATH_NAME.AdminPages.OnlineSurvey }}
                                icon={<RiSurveyFill className='h-auto' />}
                            />
                            <SidebarItems
                                title={{ name: "General Articles", to: PATH_NAME.AdminPages.GeneralArticles }}
                                icon={<MdReport className='h-auto' />}
                            />
                            <SidebarItems
                                title={{ name: "Sports Tourism Articles", to: PATH_NAME.AdminPages.SportsTourismArticles }}
                                icon={<MdReport className='h-auto' />}
                            />
                            <SidebarItems
                                title={{ name: "Emergency", to: PATH_NAME.AdminPages.Emergency }}
                                icon={<GiSiren className='h-auto' />}
                            />
                            <SidebarItems
                                title={{ name: "Transparency", to: PATH_NAME.AdminPages.Transparency }}
                                icon={<FaScroll className='h-auto' />}
                            />
                            <SidebarItems
                                title={{ name: "Reported Contents", to: PATH_NAME.AdminPages.ReportedContents }}
                                icon={<MdReport className='h-auto' />}
                            />
                        </div>
                        <div className='w-11/12 h-1 bg-lgu-green rounded-full mt-5' /> {/** just a line below all the categories */}
                    </h1>
                </div>
                <div className='flex'> {/** This is the contents beside the sidebar */}
                    <div className='grow overflow-y-auto ml-80'>
                        <Body className="mx-5">
                            {
                                location.pathname === PATH_NAME.AdminPages.Admin ?
                                    <div className='fixed flex top-24 bottom-0 right-0 left-80 bg-gray-200 justify-center'>
                                        <div>
                                            <img
                                                src={require("./../../res/img/waterfall.png")}
                                                className='w-40 h-40 opacity-50 mt-32' />
                                            <p className='mt-5 select-none'>Admin Dashboard</p>
                                        </div>
                                    </div>
                                    :
                                    <Outlet />
                            }
                        </Body>
                    </div>
                </div>
            </>
            :
            <Page403 />
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
                                    to={title.to + "/" + subtitle.to}
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
