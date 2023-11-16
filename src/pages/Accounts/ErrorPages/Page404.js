import React from 'react'
import { useNavigate } from 'react-router'
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';

export default function Page404() {
    const navigate = useNavigate();
    return (
        <div className="w-screen h-screen flex items-center justify-center" style={{ backgroundImage: "url(" + require('./../../../res/img/try.jpg') + ")", backgroundRepeat: "no-repeat", backgroundPosition: "center bottom 0%", }}>
            <div className='rounded-3xl w-7/12 h-4/5 bg-lgu-green items-center justify-center flex flex-col'>
                <p className='text-center text-white bold text-6xl block mb-5'>Oopsies!</p>
                <p className='text-center text-white bold text-3xl block mb-2'>404</p>
                <p className='text-center text-white bold text-xl block mb-10'>Page Not Found</p>
                <p
                    className='text-center text-lgu-green px-5 py-3 rounded-lg bold text-xl block bg-lgu-yellow cursor-pointer select-none hover:brightness-90'
                    onClick={()=>navigate(PATH_NAME.Home)}>Go to Homepage</p>
            </div>
        </div>
    )
}
