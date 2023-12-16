import React, { useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import BackToTop from '../../../components/BackToTop';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { API } from '../../../Variables/GLOBAL_VARIABLE';
import axios from 'axios';

// ... (import statements remain unchanged)

export default function Awards() {

    const [value, setValue] = useState([]);

    useEffect(() => {
        axios.get(API.viewAward, {})
            .then((response) => response.data)
            .then((data) => {
                var newItems = [];
                for (var item of data) {
                    const imageName = item.imgName; // Assuming there's a property like 'imageName' in your data
                    const byteCharacters = atob(item.image); // Assuming there's a property like 'image' in your data

                    // Convert base64 string to ArrayBuffer
                    const byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    const byteArray = new Uint8Array(byteNumbers);

                    // Create a Blob from the ArrayBuffer
                    const blob = new Blob([byteArray], { type: 'image/*' }); // Change the type according to your image format

                    // Create a File from the Blob
                    const file = new File([blob], imageName || 'Image', { type: 'image/*' }); // Change the type accordingly

                    const imageUrl = URL.createObjectURL(blob);

                    newItems.push({ id: item.awardsID, pic: imageUrl, title: item.awardTitle, cont: item.description});
                }
                setValue(newItems);
            });
    }, []);

    return (
        <>
            <Banner
                bannerType="common"
                src={require("../../../res/img/awards.jpg")}
                alt="Mananap Falls"
                searchBar={true}
                breadcrumbs={[
                    { title: "Home", to: PATH_NAME.Home },
                    { title: "The Town" },
                    { title: "Awards", to: PATH_NAME.TheTown.Awards },
                ]}
            >
                <p>Awards and Recognition</p>
            </Banner>

            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {value.map((content, index) => (
                        <div key={index} className="bg-white rounded overflow-hidden shadow-md p-4 mb-4">
                            <div
                                className="w-full h-48 md:h-64"
                                style={{
                                    backgroundImage: `url(${content.pic})`,
                                    backgroundSize: 'cover',
                                }}
                                alt={content.title}
                            ></div>
                            <div className="p-4">
                                <p className="text-gray-900 font-bold text-xl mb-2">{content.title}</p>
                                <p className="text-gray-700 text-base">{content.cont}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BackToTop />
        </>
    );
}