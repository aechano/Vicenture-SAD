import React, { useState, useRef, useEffect } from 'react';
import { USER_TYPES } from '../../Variables/GLOBAL_VARIABLE';
import Page403 from '../Accounts/ErrorPages/Page403';

export default function AdminAnalytics({ userType }) {
  const [dashboardItems] = useState([
    {
      id: 'AdminAnalytics',
      label: 'Analytics',
      content: <div>Web Analytics</div>,
    },
  ]);

  const [pagesItems] = useState([
    {
      id: 'adminHomepage',
      label: 'Homepage',
      content: <div>Content for Homepage</div>,
    },
    {
      id: 'town',
      label: 'The Town',
      subItemsTown: [
        { label: 'About San Vicente', content: <div>Content for About San Vicente</div> },
        { label: 'Municipality Profile', content: <div>Content for Municipality Profile</div> },
        { label: 'Municipality Programs', content: <div>Content for Municipality Programs</div> },
        { label: 'Elected Officials', content: <div>Content for Elected Officials</div> },
        { label: 'Offices', content: <div>Content for Offices</div> },
        { label: 'Citizen Charter', content: <div>Content for Citizen Charter</div> },
      ],
    },
    {
      id: 'tourism',
      label: 'Tourism',
      subItemsTourism: [
        { label: 'Places To Visit', content: <div>Content for Places To Visit</div> },
        { label: 'Activities', content: <div>Content for Activities</div> },
        { label: 'Promotional Contents', content: <div>Content for Promotional Contents</div> },
      ],
    },
    {
      id: 'invest',
      label: 'Invest',
      subItemsInvest: [
        { label: 'Investment Opportunities', content: <div>Content for Investment Opportunities</div> },
        { label: 'Reasons To Invest', content: <div>Content for Reasons To Invest</div> },
      ],
    },
    {
      id: 'transparency',
      label: 'Transparency',
      content: <div>Content for Transparency</div>,
    },
  ]);

  const [formsItems] = useState([
    {
      id: 'onlineSurvey',
      label: 'Online Survey',
      content: <div>Content for Online Survey</div>,
    },
  ]);

  const [othersItems] = useState([
    {
      id: 'liveStreaming',
      label: 'Live Streaming',
      content: <div>Content for Live Streaming</div>,
    },
    {
      id: 'emergencies',
      label: 'Emergencies',
      content: <div>Content for Emergencies</div>,
    },
    {
      id: 'reportedContents',
      label: 'Reported Contents',
      content: <div>Content for Reported Contents</div>,
    },
  ]);


  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTownSubItem, setSelectedTownSubItem] = useState(null);
  const [showTownOptions, setShowTownOptions] = useState(false);
  const [showTourismOptions, setShowTourismOptions] = useState(false);
  const [showInvestOptions, setShowInvestOptions] = useState(false);

  const townRef = useRef();
  const tourismRef = useRef();
  const investRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !townRef.current?.contains(event.target) &&
        !tourismRef.current?.contains(event.target) &&
        !investRef.current?.contains(event.target)
      ) {
        setSelectedOption(null);
        setSelectedTownSubItem(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setSelectedTownSubItem(null);

    if (option.id === 'town') {
      setShowTownOptions((prev) => !prev);
      setShowTourismOptions(false);
      setShowInvestOptions(false);
    } else if (option.id === 'tourism') {
      setShowTownOptions(false);
      setShowTourismOptions((prev) => !prev);
      setShowInvestOptions(false);
    } else if (option.id === 'invest') {
      setShowTownOptions(false);
      setShowTourismOptions(false);
      setShowInvestOptions((prev) => !prev);
    } else {
      setShowTownOptions(false);
      setShowTourismOptions(false);
      setShowInvestOptions(false);
    }
  };

  const handleTownSubItemClick = (subItem) => {
    setSelectedTownSubItem(subItem);
  };

  const renderSubItems = (subItems, ref, option) => {
    const isTownOption = option.id === 'town';
    const isTourismOption = option.id === 'tourism';
    const isInvestOption = option.id === 'invest';

    return (
      <div className={`ml-6 ${isTownOption || isTourismOption || isInvestOption ? 'dropdown-submenu' : ''}`} ref={ref}>
        {(isTownOption && showTownOptions) || (isTourismOption && showTourismOptions) || (isInvestOption && showInvestOptions) ? (
          <div className="dropdown">
            <button className="dropbtn" onClick={() => handleOptionClick(option)}>
              {option && option.label}
            </button>
            <div className="dropdown-content">
              {/* Filter out title items */}
              {subItems
                .filter((subItem) => !subItem.isTitle)
                .map((subItem) => (
                  <div
                    key={subItem.label}
                    className={`text-base text-lgu-green cursor-pointer font-normal ${selectedTownSubItem === subItem ? 'normal' : 'normal'}`}
                    onClick={() => handleTownSubItemClick(subItem)}
                  >
                    {subItem.label}
                  </div>
                ))}
            </div>
          </div>
        ) : null}
      </div>
    );
  };
  const renderContent = () => {
    if (selectedOption && selectedOption.id === 'AdminAnalytics') {
      return renderAnalyticsContent();
    }

    if (selectedOption && !selectedOption.isTitle) {
      const selectedItem = [...dashboardItems, ...pagesItems, ...formsItems, ...othersItems].find(
        (item) => item.id === selectedOption.id
      );
      return selectedItem ? (
        <div className="flex">
          {selectedItem.content}
        </div>
      ) : null;
    }

    return null;
  };

  const renderAnalyticsContent = () => {
    return (
      <div className="flex">
        {/* First container */}
        <div className="w-10/11 ml-28">
          {/* Container for First-Level and Investment-Related Activity */}
          <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-36 mt-16 mb-8 font-bold text-center">
            <p className="mt-4">First-Level User Activity</p>
          </div>

          <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-36 mt-8 mb-8 font-bold text-center">
            <p className="mt-4">New User Accounts</p>
          </div>
        </div>

        {/* Second container */}
        <div className="w-10/11 ml-16">
          {/* Container for New User Account and User Account */}
          <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-2 mt-16 mb-8 font-bold text-center">
            <p className="mt-4">Investment Related Activity</p>
          </div>

          <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-2 mt-8 mb-8 font-bold text-center">
            <p className="mt-4">User Account</p>
          </div>
        </div>
      </div>
    );
  };


  if ([USER_TYPES.Citizen, USER_TYPES.Guest, USER_TYPES.Tourist, USER_TYPES.Investorm, USER_TYPES.LguSV].includes(userType)) {
    return <Page403 />
  }

  return (
    <div className="flex">
      <div className="bg-lgu-yellow w-1/6 p-4">
        <div className="text-xl font-bold text-80733D mt-6">Dashboard</div>
        {dashboardItems.map((item) => (
          <div key={item.id} className="cursor-pointer text-base text-lgu-green font-bold ml-4" onClick={() => handleOptionClick(item)}>
            {item.label}
          </div>
        ))}

        <div className="text-xl font-bold text-80733D mt-6">Pages</div>
        {pagesItems.map((item) => (
          <div key={item.id} className="cursor-pointer text-base text-lgu-green font-bold ml-4" onClick={() => handleOptionClick(item)}>
            {item.label}
            {item.id === 'town' && renderSubItems(item.subItemsTown, townRef, item)}
            {item.id === 'tourism' && renderSubItems(item.subItemsTourism, tourismRef, item)}
            {item.id === 'invest' && renderSubItems(item.subItemsInvest, investRef, item)}
          </div>
        ))}

        <div className="text-xl font-bold text-80733D mt-6">Forms</div>
        {formsItems.map((item) => (
          <div key={item.id} className="cursor-pointer text-base text-lgu-green font-bold ml-4" onClick={() => handleOptionClick(item)}>
            {item.label}
          </div>
        ))}

        <div className="text-xl font-bold text-80733D mt-6">Others</div>
        {othersItems.map((item) => (
          <div key={item.id} className="cursor-pointer text-base text-lgu-green font-bold ml-4" onClick={() => handleOptionClick(item)}>
            {item.label}
          </div>
        ))}
      </div>

      {renderContent()}
    </div>
  );
}