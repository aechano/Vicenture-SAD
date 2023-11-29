import React from 'react'
import Base from '../Base'
import { PATH_NAME } from '../../../../Variables/GLOBAL_VARIABLE'
import { Outlet, useLocation } from 'react-router'

export default function AdminInvestBase() {
    const location = useLocation();
    var contents = [
        { name: "Investment Opportunities", to: PATH_NAME.AdminPages.InvestmentOpportunities },
        { name: "Reasons To Invest", to: PATH_NAME.AdminPages.ReasonsToInvest }
    ]
    return (
        location.pathname === PATH_NAME.AdminPages.Admin + "/" + PATH_NAME.AdminPages.Invest
            ?
            <Base contents={contents} title="Invest" />
            :
            <Outlet />
    )
}