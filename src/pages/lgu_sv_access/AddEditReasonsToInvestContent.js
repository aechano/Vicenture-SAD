import React, { useEffect } from "react";
import InvestAddEditContent from '../../components/InvestAddEditContent'; // Import as default

import { useParams } from "react-router";
import Page404 from "../Accounts/ErrorPages/Page404";

export default function InvestAddEditPage() {
    const { type, method, contentID } = useParams();

    useEffect(() => {
        if (!["investment-opportunities", "reasons-to-invest"].includes(type)) {
            return <Page404 />
        }
    }, [])

    var content = {
        content: "Agriculture",
    };

    return (
        <InvestAddEditContent
            title={(method === "add" ? "Add" : "Edit") + (type === "reasons-to-invest" ? " Reasons To Invest" : type === "investment-opportunities" ? " Investment Opportunities" : null)}
            type={method === "add" ? "ADD" : "EDIT"}
            contentBody={contentID !== undefined ? content : undefined}
        />
    );
}
