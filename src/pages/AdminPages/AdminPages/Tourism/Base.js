import React from 'react'
import Base from '../Base'
import { PATH_NAME } from '../../../../Variables/GLOBAL_VARIABLE'
import { Outlet, useLocation } from 'react-router';

export default function AdminTourismBase() {
    const location = useLocation();
    var contents = [
        { name: "Places To Visit", to: PATH_NAME.AdminPages.PlacesToVisit },
        { name: "Activities", to: PATH_NAME.AdminPages.Activities }
    ]
    return (
        location.pathname === PATH_NAME.AdminPages.Admin + "/" + PATH_NAME.AdminPages.Tourism ||
        location.pathname === PATH_NAME.AdminPages.ContentWriter + "/" + PATH_NAME.AdminPages.Tourism
            ?
            <Base contents={contents} title="Tourism" />
            :
            <Outlet />
    )
}