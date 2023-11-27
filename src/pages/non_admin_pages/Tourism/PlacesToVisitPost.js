import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CommentingSystem from '../../../components/CommentingSystem';
import BackToTop from '../../../components/BackToTop';
import StarRating from '../../../components/StarRating';


export default function PlacesToVisitPost() {
    const { contentID } = useParams();
    const [userRating, setUserRating] = useState(0);
    const [content, setContent] = useState({});

    var contents = [
        {
            id: 1,
            pic: require("../../../res/img/mananap.jpg"),
            title: "Mananap Falls",
            address: "3R3G+HVX, San Vicente, Camarines Norte",
            contact: " /mananapfallsSVCN",
            body: "Mananap is a 60-feet high waterfalls with a deep swimming pool basin. The place is ideal for swimming, fishing, camping and just getting away from the busy and noisy city life. It is a 2 km hike from the town of Barangay Fabrica in San Vicente, Camarines Norte.",
        },
        {
            id: 2,
            pic: require("../../../res/img/anahaw-resort.jpg"),
            title: "Anahaw Resort",
            address: "3R3G+HVX, San Vicente, Camarines Norte",
            contact: " /mananapfallsSVCN",
            body: "Mananap is a 60-feet high waterfalls with a deep swimming pool basin. The place is ideal for swimming, fishing, camping and just getting away from the busy and noisy city life. It is a 2 km hike from the town of Barangay Fabrica in San Vicente, Camarines Norte.",
        },
        {
            id: 3,
            pic: require("../../../res/img/satu-hati-mini-farm-and-resort.jpg"),
            title: "Satu Hati Mini Farm & Resort",
            address: "3R3G+HVX, San Vicente, Camarines Norte",
            contact: " /mananapfallsSVCN",
            body: "Mananap is a 60-feet high waterfalls with a deep swimming pool basin. The place is ideal for swimming, fishing, camping and just getting away from the busy and noisy city life. It is a 2 km hike from the town of Barangay Fabrica in San Vicente, Camarines Norte.",
        },
        {
            id: 4,
            pic: require("../../../res/img/paraiso-sa-iraya.jpg"),
            title: "Paraiso sa Iraya",
            address: "3R3G+HVX, San Vicente, Camarines Norte",
            contact: " /mananapfallsSVCN",
            body: "Mananap is a 60-feet high waterfalls with a deep swimming pool basin. The place is ideal for swimming, fishing, camping and just getting away from the busy and noisy city life. It is a 2 km hike from the town of Barangay Fabrica in San Vicente, Camarines Norte.",
        },
        {
            id: 5,
            pic: require("../../../res/img/lyza-resort.jpg"),
            title: "Lyza Resort",
            address: "3R3G+HVX, San Vicente, Camarines Norte",
            contact: " /mananapfallsSVCN",
            body: "Mananap is a 60-feet high waterfalls with a deep swimming pool basin. The place is ideal for swimming, fishing, camping and just getting away from the busy and noisy city life. It is a 2 km hike from the town of Barangay Fabrica in San Vicente, Camarines Norte.",
        },
        {
            id: 6,
            pic: require("../../../res/img/mananap.jpg"),
            title: "Mananap Falls",
            address: "3R3G+HVX, San Vicente, Camarines Norte",
            contact: " /mananapfallsSVCN",
            body: "Mananap is a 60-feet high waterfalls with a deep swimming pool basin. The place is ideal for swimming, fishing, camping and just getting away from the busy and noisy city life. It is a 2 km hike from the town of Barangay Fabrica in San Vicente, Camarines Norte.",
        },
    ];

    useEffect(()=>{
        for (var content of contents){
            if (content.id === parseInt(contentID)){
                setContent(content);
                break;
            }
        }
    }, [])

    const handleRatingChange = (newRating) => {
        setUserRating(newRating);
        // Handle any additional logic when the rating changes
    };

    return (
        <div className='w-full bg-gray-400 py-20'>
            <div className='w-3/4 mx-auto p-10 shadow-md bg-gray-100 rounded-3xl'>
                <div className='flex items-center'>
                    <img src={content.pic} alt={content.title?content.title:null} className='h-auto max-w-md rounded-lg' />
                    <div className='ml-4'>
                        <h1 className='text-4xl font-bold mt-2'>{content.title?content.title:null}</h1>
                        <p className='mt-4'><b>Address:</b>{content.address?content.address:null}
                        </p>
                        <p className='mt-1'><b>Contact:</b> <a href="/mananapfallsSVCN">{content.contact?content.contact:null}</a>
                        </p>
                    </div>
                </div>
                <p className='mt-6'>{content.body?content.body:null}</p>

                <div>
                    <p className='text-left mt-9 text-lg font-bold ml-1'>Rate it!</p>

                </div>
                {/* Use the StarRating component */}
                <StarRating totalStars={5} onRatingChange={handleRatingChange} />



                <CommentingSystem content={contentID} />
            </div>
            <BackToTop />
        </div>
    );
}
