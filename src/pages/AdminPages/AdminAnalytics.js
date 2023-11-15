import React, { useState, useRef, useEffect } from 'react';
import { USER_TYPES } from '../../Variables/GLOBAL_VARIABLE';
import Homepage from '../Homepage';
import { TransparencyContent } from '../../pages/AdminPages/adminTransparency';
import Page403 from '../Accounts/ErrorPages/Page403';
import { FaHome, FaChartBar, FaBuilding, FaPencilAlt, FaFileVideo, FaStop } from 'react-icons/fa'

export default function AdminAnalytics({ userType }) {
  const [dashboardItems] = useState([
    {
      id: 'AdminAnalytics',
      label: 'Analytics', 
      iconAnalytics: <FaChartBar />,
      content: <div></div>,
    },
  ]);

  const [pagesItems] = useState([
    {
      id: 'adminHomepage',
      label: 'Homepage',
      iconHomepage: <FaHome />,
      content: <h1 className="text-3xl font-bold mb-4 mt-8 ml-4"></h1>,
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
      content: <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Transparency Dashboard</h1>,
    },
  ]);

  const [formsItems] = useState([
    {
      id: 'onlineSurvey',
      label: 'Online Survey',
      iconSurvey: <FaPencilAlt />,
      content: <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Online Survey</h1>,
    },
  ]);

  const [othersItems] = useState([
    {
      id: 'liveStreaming',
      label: 'Live Streaming',
      iconLive: <FaFileVideo />,
      content: <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Live Streaming</h1>,
    },
    {
      id: 'emergencies',
      label: 'Emergencies',
      iconEmergency: <FaStop />,
      content: <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Emergencies</h1>,
    },
    {
      id: 'reportedContents',
      label: 'Reported Contents',
      content: <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Reported Contents</h1>,
    },
  ]);

  const [selectedOption, setSelectedOption] = useState("AdminAnalytics");
  const [selectedTownSubItem, setSelectedTownSubItem] = useState(null);
  const [showTownOptions, setShowTownOptions] = useState(false);
  const [showTourismOptions, setShowTourismOptions] = useState(false);
  const [showInvestOptions, setShowInvestOptions] = useState(false);
  const [selectedSubItemContent, setSelectedSubItemContent] = useState(null);
  const [townDropdownOpen, setTownDropdownOpen] = useState(false);
  const [tourismDropdownOpen, setTourismDropdownOpen] = useState(false);
  const [investDropdownOpen, setInvestDropdownOpen] = useState(false);



  const townRef = useRef();
  const tourismRef = useRef();
  const investRef = useRef();

  const dashboardRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dashboardRef.current.contains(event.target)) {
        // Set the default selected option based on user type
        if (userType === USER_TYPES.Admin) {
          setSelectedOption("AdminAnalytics");
        } else if (userType === USER_TYPES.LGU) {
          setSelectedOption("adminHomepage");
        }
        setSelectedTownSubItem(null);
        setShowTownOptions(false);
        setShowTourismOptions(false);
        setShowInvestOptions(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [userType]);
  const handleOptionClick = (option) => {
    setSelectedOption((prevOption) => {
      if (prevOption === option.id) {
        // If the same option is clicked again, reset the state
        setShowTownOptions(false);
        setShowTourismOptions(false);
        setShowInvestOptions(false);
        setTownDropdownOpen(false);
        setTourismDropdownOpen(false);
        setInvestDropdownOpen(false);

        return '';
      }

      setShowTownOptions(option.id === 'town');
      setShowTourismOptions(option.id === 'tourism');
      setShowInvestOptions(option.id === 'invest');
      setTownDropdownOpen(option.id === 'town');
      setTourismDropdownOpen(option.id === 'tourism');
      setInvestDropdownOpen(option.id === 'invest');

      return option.id;
    });
  };


  const handleTownSubItemClick = (subItem, event) => {
    event.stopPropagation();  // Stop event propagation to prevent closing
    setSelectedTownSubItem(subItem);
    setSelectedSubItemContent(subItem.content);
  };



  const renderSubItems = (subItems, ref, option) => {
    const isTownOption = option.id === 'town';
    const isTourismOption = option.id === 'tourism';
    const isInvestOption = option.id === 'invest';

    return (
      <div className={`ml-6 ${isTownOption || isTourismOption || isInvestOption ? 'dropdown-submenu' : ''}`} ref={ref}>
        {(isTownOption && townDropdownOpen) || (isTourismOption && tourismDropdownOpen) || (isInvestOption && investDropdownOpen) ? (
          <div className="dropdown">
            <div className="dropdown-content">
              {/* Filter out title items */}
              {subItems
                .filter((subItem) => !subItem.isTitle)
                .map((subItem) => (
                  <div
                    key={subItem.label}
                    className={`text-base text-lgu-green cursor-pointer font-normal ${selectedTownSubItem === subItem ? 'normal' : 'normal'}`}
                    onClick={(event) => handleTownSubItemClick(subItem, event)}
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
    const lowerCaseSelectedOption = selectedOption.toLowerCase(); // Convert to lowercase for case-insensitive comparison

    if (lowerCaseSelectedOption === 'adminanalytics') {
      return <RenderAnalyticsContent />;
    } else if (lowerCaseSelectedOption === 'adminhomepage') {
      // Include the PreviewHomepage component for the admin homepage
      return <PreviewHomepage />;
    }


    const selectedItem = [...dashboardItems, ...pagesItems, ...formsItems, ...othersItems].find(
      (item) => item.id.toLowerCase() === lowerCaseSelectedOption
    );

    return selectedItem ? (
      <div className="flex">
        {selectedItem.content}
      </div>
    ) : null;
  };

  if ([USER_TYPES.Citizen, USER_TYPES.Guest, USER_TYPES.Tourist, USER_TYPES.Investor, USER_TYPES.LguSV].includes(userType)) {
    return <Page403 />;
  }

  return (
    <div className="flex" ref={dashboardRef}>
      <div className="bg-lgu-yellow w-1/5 p-4">
        <div className="text-xl font-bold text-80733D mt-4">Dashboard</div>
        {dashboardItems.map((item) => (
          <div key={item.id} className="cursor-pointer flex items-center text-base text-lgu-green font-bold ml-4" onClick={() => handleOptionClick(item)}>
            <span className="mr-2 icon-large">{item.iconAnalytics}</span>
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
          <div key={item.id} className="cursor-pointer flex items-center text-base text-lgu-green font-bold ml-4" onClick={() => handleOptionClick(item)}>
            <span className="mr-2 icon-large">{item.iconSurvey}</span>
            {item.label}
          </div>
        ))}

        <div className="text-xl font-bold text-80733D mt-6">Others</div>
        {othersItems.map((item) => (
          <div key={item.id} className="cursor-pointer flex items-center text-base text-lgu-green font-bold ml-4" onClick={() => handleOptionClick(item)}>
            <span className="mr-2 icon-large">{item.iconLive}</span>
            {item.label}
          </div>
        ))}
      </div>

      {renderContent()}
    </div>
  );
}

function RenderAnalyticsContent() {
  return (
    <div className="flex">
      <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Web Analytics</h1>
      {/* First container */}
      <div className="w-10/11 ml-18 mt-4">
        {/* Container for First-Level and Investment-Related Activity */}
        <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-8 mt-16 mb-8 font-bold text-center">
          <p className="mt-4">First-Level User Activity</p>
        </div>

        <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-8 mt-8 mb-8 font-bold text-center">
          <p className="mt-4">New User Accounts</p>
        </div>
      </div>

      {/* Second container */}
      <div className="w-10/11 ml-16 mt-4">
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
}

function PreviewHomepage() {
  const [isBannerTitleSelected, setIsBannerTitleSelected] = useState(false);
  const [isBannerImageSelected, setIsBannerImageSelected] = useState(false);
  const [bannerImage, setBannerImage] = useState(null);

  const [isSectionTitleSelected, setIsSectionTitleSelected] = useState(false);
  const [isSectionImageSelected, setIsSectionImageSelected] = useState(false);
  const [sectionImage, setSectionImage] = useState(null);
  const [isSectionDescriptionSelected, setIsSectionDescriptionSelected] = useState(false);

  const handleBannerImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result);
        setIsBannerImageSelected(true);
      };
      reader.readAsDataURL(file);
    } else {
      setBannerImage(null);
      setIsBannerImageSelected(false);
    }
  };

  const handleSectionImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSectionImage(reader.result);
        setIsSectionImageSelected(true);
      };
      reader.readAsDataURL(file);
    } else {
      setSectionImage(null);
      setIsSectionImageSelected(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      {/* Edit section for homepage */}
      <div className="w-1/3 p-4 bg-lgu-lime rounded-md mr-8 ml-8 mt-8" style={{ height: "500px", overflowY: "auto", overflowX: "hidden" }}>
        <div className="flex items-center mt-2 mb-4">
          {/* Checkbox for banner title */}
          <input
            type="checkbox"
            id="bannerTitleCheckbox"
            checked={isBannerTitleSelected}
            onChange={() => setIsBannerTitleSelected(!isBannerTitleSelected)}
            className="mr-2"
          />
          <label htmlFor="bannerTitleCheckbox" className="text-lg font-normal text-black">
            Banner Title:
          </label>
        </div>
        {/* Input for banner title */}
        <div className="mt-4 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Banner Title"
            className="w-full p-2 text-lg font-bold bg-white border border-lgu-green rounded-3xl"
            disabled={!isBannerTitleSelected}
          />
        </div>
        <div className="flex items-center mt-6 mb-4">
          {/* Checkbox for banner image */}
          <input
            type="checkbox"
            id="bannerImageCheckbox"
            checked={isBannerImageSelected}
            onChange={() => setIsBannerImageSelected(!isBannerImageSelected)}
            className="mr-2"
          />
          <label htmlFor="bannerImageInput" className="text-lg font-normal text-black">
            Banner Image:
          </label>
        </div>
        {/* Input for banner image */}
        <div>
          <input
            type="file"
            id="bannerImageInput"
            accept="image/*"
            onChange={handleBannerImageChange}
            className="mt-2 mb-4"
            disabled={!isBannerImageSelected}
          />
          {/* Display banner image */}
          {bannerImage && (
            <img
              src={bannerImage}
              alt="Banner Image"
              className="w-full rounded-md"
            />
          )}
        </div>

        {/* Section for homepage with border */}
        <div className="border-t-2 border-lgu-green pt-8 mt-4">
          <div className="flex items-center mt-2 mb-4">
            {/* Checkbox for section title */}
            <input
              type="checkbox"
              id="sectionTitleCheckbox"
              checked={isSectionTitleSelected}
              onChange={() => setIsSectionTitleSelected(!isSectionTitleSelected)}
              className="mr-2"
            />
            <label htmlFor="sectionTitleCheckbox" className="text-lg font-normal text-black">
              Section Title:
            </label>
          </div>
          {/* Input for section title */}
          <div className="mt-4 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Section Title"
              className="w-full p-2 text-lg font-bold bg-white border border-lgu-green rounded-3xl"
              disabled={!isSectionTitleSelected}
            />
          </div>
          <div className="flex items-center mt-6 mb-4">
            {/* Checkbox for section image */}
            <input
              type="checkbox"
              id="sectionImageCheckbox"
              checked={isSectionImageSelected}
              onChange={() => setIsSectionImageSelected(!isSectionImageSelected)}
              className="mr-2"
            />
            <label htmlFor="sectionImageInput" className="text-lg font-normal text-black">
              Section Image:
            </label>
          </div>
          {/* Input for section image */}
          <div>
            <input
              type="file"
              id="sectionImageInput"
              accept="image/*"
              onChange={handleSectionImageChange}
              className="mt-2 mb-4"
              disabled={!isSectionImageSelected}
            />
            {/* Display section image */}
            {sectionImage && (
              <img
                src={sectionImage}
                alt="Section Image"
                className="w-full rounded-md"
              />
            )}
          </div>
          <div className="flex items-center mt-2 mb-4">
            {/* Checkbox for section description */}
            <input
              type="checkbox"
              id="sectionDescriptionCheckbox"
              checked={isSectionDescriptionSelected}
              onChange={() => setIsSectionDescriptionSelected(!isSectionDescriptionSelected)}
              className="mr-2"
            />
            <label htmlFor="sectionDescriptionCheckbox" className="text-lg font-normal text-black">
              Section Description:
            </label>
          </div>
          {/* Input for section description */}
          <div className="mt-4 rounded-md overflow-hidden">
            <textarea
              placeholder="Section Description"
              className="w-full p-2 text-lg font-bold bg-white border border-gray-400 rounded-md"
              disabled={!isSectionDescriptionSelected}
            />
          </div>
        </div>
      </div>

      <div className="w-3/4 h-96 overflow-auto border-2 border-gray-500 rounded shadow-lg">
        <Homepage userType={USER_TYPES.Admin} />
      </div>
    </div>
  );
}
