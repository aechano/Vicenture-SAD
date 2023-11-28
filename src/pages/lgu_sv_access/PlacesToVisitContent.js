import React, { useState } from 'react';
import { LguSvAddEditContent } from '../../components/LguSvAddEditContent';
import { useParams } from 'react-router';

export default function PlacesToVisitContent() {
    const initialCategories = ['Nature', 'Restaurants', 'Resorts', 'Cafe', 'Schools'];
    const { method, contentID } = useParams();

    // Define state for categories and a setter function
    const [categories, setCategories] = useState(initialCategories);

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
            setCategories={setCategories}
            type = {method==="add"?"ADD":"EDIT"}
            contentType = "TOURISM"
            contentBody = {contentID!==undefined?content:undefined}
        />
    );
}
