import React, { useState } from 'react';

const AdminInputUploadComponent = () => {
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
          {/* ... (rest of the section code) */}
        </div>
      </div>
    </div>
  );
};

export default AdminInputUploadComponent;
