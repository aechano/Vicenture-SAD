import React from 'react'
import Base from '../Base'
import { PATH_NAME } from '../../../../Variables/GLOBAL_VARIABLE'
import { Outlet, useLocation } from 'react-router'

export default function AdminHomepageBase() {
    const location = useLocation();
    var contents = [
        { name: "Banner", to: PATH_NAME.AdminPages.Banner },
        { name: "Events", to: PATH_NAME.AdminPages.Events },
        { name: "Awards", to: PATH_NAME.AdminPages.Awards }
    ]
    return (
        location.pathname === PATH_NAME.AdminPages.Admin + "/" + PATH_NAME.AdminPages.Homepage
            ?
            <Base contents={contents} title="Homepage" />
            :
            <Outlet />
    )
}