import React, { useEffect, useState } from "react";
import InvestAddEditContent from '../../components/InvestAddEditContent'; // Import as default

import { useParams } from "react-router";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { USER_TYPES } from "../../Variables/GLOBAL_VARIABLE";
import Page403 from "../Accounts/ErrorPages/Page403";

export default function InvestAddEditPage() {
    const { method, contentID } = useParams();

    useEffect(() => {
        var jwt = Cookies.get("token");
        if (jwt) {
            var payload = jwtDecode(jwt);
            if (payload.accountType === USER_TYPES.EndUsers){
                return <Page403/>
            }
        } else {
            return <Page403/>
        }
    }, []);


    var content = {
        content: "Agriculture",
    };

    return (
        <InvestAddEditContent
            title={(method === "add" ? "Add" : "Edit") + " Reasons To Invest"}
            type={method === "add" ? "ADD" : "EDIT"}
            contentBody={contentID !== undefined ? content : undefined}
        />
    );
}
