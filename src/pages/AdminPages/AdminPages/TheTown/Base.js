import React from 'react'
import { PATH_NAME } from '../../../../Variables/GLOBAL_VARIABLE'
import Base from '../Base'
import { Outlet, useLocation } from 'react-router'

export default function AdminTheTownBase() {
    const location = useLocation();
    var contents = [
        { name: "Municipality Profile", to: PATH_NAME.AdminPages.MunicipalityProfile },
        { name: "Elected Officials", to: PATH_NAME.AdminPages.ElectedOfficials },
        { name: "Offices", to: PATH_NAME.AdminPages.Offices },
        { name: "Citizen Charter", to: PATH_NAME.AdminPages.CitizensCharter },
    ]
    return (
        location.pathname === PATH_NAME.AdminPages.Admin + "/" + PATH_NAME.AdminPages.TheTown ||
        location.pathname === PATH_NAME.AdminPages.ContentWriter + "/" + PATH_NAME.AdminPages.TheTown
            ?
            <Base contents={contents} title="The Town" />
            :
            <Outlet />
    )
}