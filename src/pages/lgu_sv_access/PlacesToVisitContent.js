import React, { useEffect, useState } from 'react';
import { LguSvAddEditContent } from '../../components/LguSvAddEditContent';
import { useParams } from 'react-router';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { USER_TYPES } from '../../Variables/GLOBAL_VARIABLE';
import Page403 from '../Accounts/ErrorPages/Page403';

export default function PlacesToVisitContent() {
    const initialCategories = ['Nature', 'Restaurants', 'Resorts', 'Cafe', 'Schools'];
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
