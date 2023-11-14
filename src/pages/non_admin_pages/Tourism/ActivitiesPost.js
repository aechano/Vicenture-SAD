import React from 'react';
import { useParams } from 'react-router';
import CommentingSystem from '../../../components/CommentingSystem';
import BackToTop from '../../../components/BackToTop';

export default function ActivitiesPost() {
    const { contentID } = useParams();
    return (
        <div className='w-full bg-gray-400 py-20'>
            <div className='w-3/4 mx-auto p-10 shadow-md bg-gray-100 rounded-3xl'>
                <div className='flex items-center'>
                    <img src={require("../../../res/img/mapIcon.png")} alt="Hatdoh" className='h-auto max-w-md rounded-lg' />
                    <div className='ml-4'>
                        <h1 className='text-4xl font-bold mt-2'>Mananap Falls</h1>
                        <p className='mt-4'><b>Address:</b> 3R3G+HVX, San Vicente, Camarines Norte
                        </p>
                        <p className='mt-1'><b>Contact:</b> <a href="/mananapfallsSVCN">/mananapfallsSVCN</a>
                        </p>
                    </div>
                </div>
                <p className='mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam quis tincidunt ex. Cras accumsan tempor venenatis. Phasellus a iaculis lectus. Vivamus vitae elit non urna luctus gravida. Nullam turpis ... Donec ultricies neque a eros tempor fermentum. Integer id imperdiet lorem. Praesent fermentum pulvinar fermentum. Donec auctor tellus velit, vitae hendrerit justo ultricies sit amet. Cras ac imperdiet mauris. Suspendisse at auctor lorem, et pharetra magna. Donec justo ante, finibus sed commodo non, ultrices at nulla. Donec vestibulum faucibus turpis iaculis dignissim.</p>
                <CommentingSystem content={contentID} />
            </div>
            <BackToTop />
        </div>
    );
}
