import React from 'react'

export default function ContentFeed({contents}) {
    /*
    This is  a component more fitting for Places To Visit and Activities.
    I am planning on changing the UI for the Forums and Discussions. So,
    this code is on standby.
    */
    return (
        contents.map((content, index) => (
            <div key={content.contentID} className='flex h-60 bg-gray-100 rounded-3xl my-5 drop-shadow-md hover:brightness-95'>
                {content.images ?
                    <img
                        src={content.images[0].src}
                        alt={content.images[0].alt}
                        className='h-full w-60 rounded-l-3xl' />
                    :
                    null
                }
                <div className='flex-initial w-full ms-5 mt-5'>
                    <h1 className='font-bold'>
                        {content.title}
                    </h1>
                    <p>
                        {content.body}
                    </p>
                </div>
            </div>
        ))
    );
}
