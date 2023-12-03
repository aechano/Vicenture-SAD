import React, { useEffect, useState } from "react";
import InvestAddEditContent from '../../components/InvestAddEditContent'; // Import as default

import { useParams } from "react-router";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { USER_TYPES } from "../../Variables/GLOBAL_VARIABLE";
import Page403 from "../Accounts/ErrorPages/Page403";
import Page404 from "../Accounts/ErrorPages/Page404";

export default function InvestAddEditPage() {
    const [isFound, setIsFound] = useState(true);
    const [hasAccess, setHasAccess] = useState(true);
    useEffect(() => {
        var jwt = Cookies.get("token");
        if (jwt) {
            var payload = jwtDecode(jwt);
            if (USER_TYPES.EndUsers.includes(payload.AccountType)) {
                setHasAccess(false);
            }
        } else {
            setHasAccess(false);
        }
    }, []);

    const { type, method, contentID } = useParams();

    useEffect(() => {
        if (!["investment-opportunities", "reasons-to-invest"].includes(type)) {
            setIsFound(false);
        }
    }, [])

    var content = {
        content: "Agriculture",
    };

    return (
        !hasAccess ?
            <Page403 />
            :
            !isFound ?
                <Page404 />
                :
                <InvestAddEditContent
                    title={(method === "add" ? "Add" : "Edit") + (type === "reasons-to-invest" ? " Reasons To Invest" : type === "investment-opportunities" ? " Investment Opportunities" : null)}
                    type={method === "add" ? "ADD" : "EDIT"}
                    contentBody={contentID !== undefined ? content : undefined}
                />
    );
}
