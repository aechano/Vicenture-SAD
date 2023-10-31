import React from 'react';

const SocialMedia = () => {
  return (
    <div className="p-4">
      <div className='pb-5 '>
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsanvicentecamarinesnorte%2F&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
          width="500"
          height="500"
          style={{
            border: 'none',
            overflow: 'hidden',
          }}
          scrolling="no"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
};

export default SocialMedia;
