import React from "react";
import InvestAddEditContent from '../../components/InvestAddEditContent'; // Import as default

import { useParams } from "react-router";

export default function InvestAddEditPage() {
    const { method, contentID } = useParams();

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
