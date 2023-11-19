import React from 'react';
import { LguSvAddEditContent } from '../../components/LguSvAddEditContent';
import { useParams } from 'react-router';

export default function PlacesToVisitContent() {
    const categories = ['Resorts', 'Restaurants', 'Nature'];
    const {method, contentID} = useParams();

    var content = {
        content:"Mananap Falls",
        contact:"/mananapfallsSVCN",
        contentCategory:"Nature",
        location:"3R3G+HVX, San Vicente, Camarines Norte",
    }

    return (
        <LguSvAddEditContent
            title = {(method==="add"?"Add":"Edit")+" Places To Visit"}
            categories={categories}
            type = {method==="add"?"ADD":"EDIT"}
            contentType = "TOURISM"
            contentBody = {contentID!==undefined?content:undefined}
        />
    );
}
