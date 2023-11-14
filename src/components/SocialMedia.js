import React from 'react';

const SocialMedia = () => {
  return (
    <div className="p-4">
      <div className='pb-5'>
        <div  style={{ maxWidth: '100%', overflow: 'hidden' }}>
          <iframe className='flex justify-center mx-auto'
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsanvicentecamarinesnorte%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
            style={{
              width: '100%',
              height: '500px',
              border: 'none',
            }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SocialMedia;


