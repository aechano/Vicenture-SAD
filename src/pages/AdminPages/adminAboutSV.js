import React, { useState } from "react";
import AboutSanVicente from "../../pages/non_admin_pages/TheTown/AboutSanVicente";
import { USER_TYPES } from '../../Variables/GLOBAL_VARIABLE';

const AdminAboutSVComponent = () => {
  const [isBannerTitleSelected, setIsBannerTitleSelected] = useState(false);
  const [isBannerImageSelected, setIsBannerImageSelected] = useState(false);
  const [bannerImage, setBannerImage] = useState(null);

  const [isSectionTitleSelected, setIsSectionTitleSelected] = useState(false);
  const [isSectionImageSelected, setIsSectionImageSelected] = useState(false);
  const [sectionImage, setSectionImage] = useState(null);
  const [isSectionDescriptionSelected, setIsSectionDescriptionSelected] = useState(false);

  const handleImageChange = (event, setImage, setIsImageSelected) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setIsImageSelected(true);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setIsImageSelected(false);
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
    <div className="flex">
      <div className="w-1/4 ml-8 mb-2 p-4 bg-lgu-lime rounded-md mt-12" style={{ height: "550px", overflowY: "auto", overflowX: "hidden" }}>
        <h1 className="text-3xl font-bold mb-4">About San Vicente</h1>
        <div className="flex items-center mt-2 mb-4">
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
        <div className="mt-4 rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Banner Title"
            className="w-full p-2 text-lg font-bold bg-white border border-lgu-green rounded-3xl"
            disabled={!isBannerTitleSelected}
          />
        </div>
        <div className="flex items-center mt-6 mb-4">
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
        <div>
          <input
            type="file"
            id="bannerImageInput"
            accept="image/*"
            onChange={(event) => handleImageChange(event, setBannerImage, setIsBannerImageSelected)}
            className="mt-2 mb-4"
            disabled={!isBannerImageSelected}
          />
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

      <div className="ml-2 mt-24 w-1/2 max-w-screen-lg flex-shrink-0 h-96 overflow-auto border-2 border-gray-500 rounded shadow-lg">
        <AboutSanVicente userType={USER_TYPES.Admin} />
      </div>
    </div>
  );
};

export default AdminAboutSVComponent;
