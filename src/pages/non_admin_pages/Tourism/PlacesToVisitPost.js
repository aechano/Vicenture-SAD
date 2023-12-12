import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentingSystem from '../../../components/CommentingSystem';
import BackToTop from '../../../components/BackToTop';
import StarRating from '../../../components/StarRating';
import axios from 'axios';
import { API } from '../../../Variables/GLOBAL_VARIABLE';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';


export default function PlacesToVisitPost() {
    const { contentID } = useParams();
    const [userRating, setUserRating] = useState({});
    const [email, setEmail] = useState();
    const [contentRating, setContentRating] = useState({ rating: 0.0, votes: 0 });
    const [mainImage, setMainImage] = useState({ pic: null, alt: null });
    const [data, setData] = useState({
        contentID: null,
        email: null,
        title: null,
        body: null,
        type: null,
        uploadDate: null,
        mediaIDs: [
            {
                mediaID: null,
                image: null,
                altText: null,
                timestamp: null
            }
        ],
        tagIDs: [
            {
                tagID: null,
                tag: null
            }
        ],
        map: {
            mapID: null,
            link: null,
            locationName: null
        },
        contact: null
    })

    useEffect(() => {
        axios.get(API.GetContentID(contentID), {})
            .then((response) => response.data)
            .then((dataFromDB) => {
                setData(dataFromDB);
                for (var mediaID of dataFromDB.mediaIDs) {
                    if (mediaID.altText === "&thumbnail;") {
                        setMainImage({
                            pic: mediaID.image,
                            alt: mediaID.altText
                        })
                        break;
                    }
                }
            });

        axios.get(API.contentRating(contentID), {})
            .then((response) => response.data)
            .then((data) => {
                setContentRating({
                    rating: data.rating !== "NaN" ? data.rating : 0.0,
                    votes: data.votes ? data.votes : 0
                });
            });

        var token = Cookies.get("token");
        if (token) {
            var payload = jwtDecode(token);
            setEmail(payload.sub);
        }

        axios.get(API.getMyContentRating(contentID), {
            headers: { "Authorization": `Bearer ${Cookies.get("token")}` },
            withCredentials: true
        })
            .then((response) => response.data)
            .then((data) => {
                setUserRating(data);
            })
    }, [contentID])

    const handleRatingChange = (newRating) => {
        if (userRating.rating === 0) {
            var ratingSum = (contentRating.rating * contentRating.votes) + newRating;
            var aveRating = ratingSum / (contentRating.votes + 1)
            setContentRating({ contentID: contentID, rating: aveRating, votes: contentRating.votes + 1 });
        } else {
            if (newRating === 0) {
                var ratingSum = (contentRating.rating * contentRating.votes) + newRating - userRating.rating;
                var aveRating = ratingSum / (contentRating.votes - 1)
                setContentRating({ contentID: contentID, rating: aveRating, votes: contentRating.votes - 1 });
            } else {
                var ratingSum = (contentRating.rating * contentRating.votes) + newRating - userRating.rating;
                var aveRating = ratingSum / contentRating.votes
                setContentRating({ contentID: contentID, rating: aveRating, votes: contentRating.votes });
            }
        }
        setUserRating({ contentID: contentID, rating: newRating, votes: 1 });

        if (newRating) {
            axios.post(API.setContentRating, {
                "email": email,
                "contents": parseInt(contentID),
                "rating": newRating
            }, { headers: { "Authorization": `Bearer ${Cookies.get("token")}` } });
        }
    };

    return (
        <div className='w-full bg-gray-400 py-20'>
            <div className='w-3/4 mx-auto p-10 shadow-md bg-gray-100 rounded-3xl'>
                <div className='flex flex-col md:flex-row items-center'>
                    {mainImage.pic ?
                        <img src={'data:image/jpeg;base64,' + mainImage.pic} alt={mainImage.alt} className='w-full h-auto max-w-md rounded-lg object-cover mb-4 md:mb-0 md:mr-4' />
                        :
                        null
                    }
                    <div className='text-center md:text-left'>
                        <h1 className='text-2xl md:text-4xl font-bold mb-2'>{data.title ? data.title : null}</h1>
                        <p className='mb-2'><b>Address:&nbsp;</b><a href={data.map_id?.link} target='_blank'>{data.map_id?.locationName}</a></p>
                        <p><b>Contact:</b> <a href="/mananapfallsSVCN">{data.contact ? data.contact : null}</a></p>
                    </div>
                </div>

                <p className='mt-6'>{data.body ? data.body : null}</p>
                <div>
                    <p className='text-left mt-9 text-lg font-bold ml-1'>Rate it!</p>
                </div>
                {/* Use the StarRating component */}
                <StarRating totalStars={5} onRatingChange={handleRatingChange} initialStars={userRating} />
                <p>{contentRating.rating} stars / {contentRating.votes} votes</p>
                <CommentingSystem contentID={contentID} />
            </div>
            <BackToTop />
        </div>
    );
}
