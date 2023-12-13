import React, { useEffect, useState } from 'react';
import LguSvAddEditContent from '../../components/LguSvAddEditContent';
import { useParams } from 'react-router';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { API, PATH_NAME, USER_TYPES } from '../../Variables/GLOBAL_VARIABLE';
import Page403 from '../Accounts/ErrorPages/Page403';
import axios from 'axios';
import Page404 from '../Accounts/ErrorPages/Page404';
import { NavLink } from 'react-router-dom/dist';
import { GiWaterfall } from "react-icons/gi";

export default function PlacesToVisitContent() {

    useEffect(() => {
        var jwt = Cookies.get("token");
        if (jwt) {
            var payload = jwtDecode(jwt);
            if (payload.accountType === USER_TYPES.EndUsers) {
                return <Page403 />
            }
        } else {
            return <Page403 />
        }
    }, []);

    const { method, contentID } = useParams();
    const [isFound, setIsFound] = useState(true);
    const [showLink, setShowLink] = useState(null);

    // Define state for categories and a setter function
    const [categories, setCategories] = useState(['Nature', 'Restaurants', 'Resorts', 'Cafe', 'Schools']);
    const [content, setContent] = useState();

    useEffect(() => {
        if (contentID) {
            axios.get(API.GetContentID(contentID), {
                headers: { "Authorization": `Bearer ${Cookies.get("token")}` },
                withCredentials: true
            })
                .then((response) => response.data)
                .then((data) => {
                    if (!data) {
                        setIsFound(false);
                    }
                    setContent(data);
                });
        }
    }, [contentID])

    const handleSave = (data) => {
        if (!data) return;
        const formData = new FormData();
        formData.append("email", data.email);
        formData.append("title", data.title);
        for (var i = 0; i < data.images.length; i++) {
            formData.append(`images`, data.images[i]);
            formData.append(`altTexts`, data.altTexts[i]);
            formData.append(`tags`, data.tags[i]);
        };
        formData.append("contact", data.contact);
        formData.append("location", data.location);
        formData.append("locationLink", data.locationLink);
        formData.append("body", data.body);
        formData.append("type", "places-to-visit");

        axios.post(API.Content("/upload"), formData, {
            headers: {
                "Authorization": `Bearer ${Cookies.get("token")}`,
                'Content-Type': 'multipart/form-data'
            },
            withCredentials: true
        })
            .then((response) => response.data)
            .then((data) => {
                setShowLink(PATH_NAME.Tourism.PlacesToVisitPost + "/" + parseInt(data.responseMessage.split(": ")[1]));
            })
    }

    return (
        isFound ?
            <>
                {
                    showLink ?
                        <SavedPopup setShow={setShowLink} link={showLink} />
                        :
                        null
                }
                <LguSvAddEditContent
                    title={(method === "add" ? "Add" : "Edit") + " Places To Visit"}
                    categories={categories}
                    setCategories={setCategories}
                    type={method === "add" ? "ADD" : "EDIT"}
                    contentType="places-to-visit"
                    contentBody={contentID !== undefined ? content : undefined}
                    onSave={handleSave}
                />
            </>
            :
            <Page404 />
    );
}

function SavedPopup({ setShow, link }) {
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsHovered(true); // close the full view of pop-up 3 seconds after run.
        }, 500);
        setTimeout(() => {
            setIsHovered(false); // close the full view of pop-up 3 seconds after run.
        }, 3000);
        setTimeout(() => {
            setShow(null); // close the full view of pop-up 3 seconds after run.
        }, 4000);
    }, [link]);

    return (
        <div className={`fixed top-40 right-4 z-10 ${isHovered ? "opacity-100" : "opacity-30"}`}>
            <div
                className={`flex items-center space-x-4 bg-green-600 p-3 rounded-full text-white cursor-pointer transition-transform transform-gpu ${isHovered ? 'translate-x-[-10px]' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <NavLink to={link} onClick={() => window.scrollTo({ top: 0, left: 0 })} className={'flex'}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-2xl"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <GiWaterfall />
                    </svg>
                    <div className={`transition-opacity h-6 px-3 ${isHovered ? 'opacity-100 md:inline-block' : 'opacity-0'} hidden `}>
                        <p className='leading-3 align-middle'>Uploaded Successfully!</p>
                        <p className='leading-3 align-middle font-sm underline'>Click to view.</p>
                    </div>
                </NavLink>


            </div>
        </div>
    )
}
