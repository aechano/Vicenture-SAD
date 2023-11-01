import React, { useRef, useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';

export default function Offices() {
  const officeData = [
    'Local Chief Executive of the Municipality',
    'Vice Mayor’s Office and Sangguniang Bayan Members',
    'Secretary to the Sangguniang Bayan Office',
    'Municipal Accounting Office',
    'Municipal Agriculturist Office',
    'Municipal Assessor’s Office',
    'Municipal Budget Office',
    'Municipal Civil Registrar’s Office',
    'Municipal Disaster Risk Reduction and Management Office',
    'Municipal Engineering Office',
    'Municipal Health Office',
    'Municipal Planning and Development Office',
    'Municipal Social Welfare and Development Office',
    'Municipal Treasury Office\n',
  ];
  const OtherofficeData = [
    'Human Resource Management Office',
    'Supply Management Office',
    'Municipal Tourism Management Office',
    'Municipal Environment and Natural Resource Office',
    'Business Permit and Licensing Office',
  ];

  const [selectedContent, setSelectedContent] = useState('Local Chief Executive of the Municipality');
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      if (contentHeight > 900) {
        contentRef.current.style.maxHeight = '900px';
        contentRef.current.style.overflowY = 'auto';
      }
    }
  }, []);

  const handleContentClick = (content, index) => {
    setSelectedContent(content);
    setSelectedContentIndex(index);

    // Scroll the content back to the top
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Banner */}
      <Banner
        bannerType="common"
        searchBar={true}
        breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
        <h1 className="lg:text-6xl text-lgu-lime font-regular font-open sans p-0 md:text-5xl text-2xl md:p-2 mb-0 mt-0">
          Offices
        </h1>
      </Banner>

      {/* Sidebar */}
      <div className="flex flex-row mt-20 mb-20">
        <div className="w-1/4 bg-lgu-yellow p-4 mt-10 ml-20 mb-20 mr-6" style={{ maxHeight: '800px', overflowY: 'auto' }}>
          <ul>
            {officeData.map((office, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '1.5vw',
                  cursor: 'pointer',
                  textDecoration: selectedContentIndex === index ? 'underline' : 'none',
                }}
                onClick={() => handleContentClick(office, index)}
              >
                {office}
              </li>
            ))}
          </ul>
          <p className="font-bold font-open sans mt-8 mb-2">OTHER OFFICES:</p>
          <ul>
            {OtherofficeData.map((other_office, index) => (
              <li
                key={index}
                style={{
                  marginBottom: '1.5vw',
                  cursor: 'pointer',
                  textDecoration: selectedContentIndex === index + officeData.length ? 'underline' : 'none',
                }}
                onClick={() => handleContentClick(other_office, index + officeData.length)}
              >
                {other_office}
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content with Scrollable Border */}
        <div className="w-3/4 pr-4 border border-black p-4" ref={contentRef}>
          <div>
            {selectedContent && (
              <>
                <div className='font-bold font-open sans text-3xl'>
                  <h2>{selectedContent}</h2>
                </div>
              </>
            )}
            
            <div>
            {/* Content here */}
            <div className='font-bold font-open sans text-2xl mt-4'>
              <h2>Mandate</h2>
            </div>
            <p>Content for Mandate goes here</p>

            <div className='font-bold font-open sans text-2xl mt-60'>
              <h2>Vision</h2>
            </div>
            <p>Content for Vision goes here</p>

            <div className='font-bold font-open sans text-2xl mt-60'>
              <h2>Mission</h2>
            </div>
            <p>Content for Mission goes here</p>

            <div className='font-bold font-open sans text-2xl mt-60'>
              <h2>Organizational Chart</h2>
            </div>
            <p>Content for Organizational Chart goes here</p>

            <div className='font-bold font-open sans text-2xl mt-60'>
              <h2>Contact Numbers</h2>
            </div>
            <p>Content for Contact Numbers goes here</p>
          </div>

            <iframe
              width="90%"
              height="600"
              frameBorder="0"
            ></iframe>

            <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
              <a
                href="/services-offered"
                style={{ textDecoration: 'underline', color: 'black' }}>See Services Offered
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
