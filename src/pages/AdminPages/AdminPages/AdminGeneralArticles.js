import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import 'react-datepicker/dist/react-datepicker.css';

export default function AdminGeneralArticles({ type }) {
  const [selectedFile, setSelectedFile] = useState('No Image Chosen');
  const [titleContent, setTitleContent] = useState('');
  const [altDesc, setAltDesc] = useState('');
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const [isOpenCategory, setIsOpenCategory] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsOpenCategory(!isOpenCategory);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
    setIsOpenCategory(false);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-20 min-h-screen">
        <div className="mx-auto flex flex-col items-center w-full max-w-7xl mb-10 border-2 border-lgu-green rounded-2xl">
          <div className="text-2xl font-bold bg-lgu-green text-white p-4 w-full rounded-tl-xl rounded-tr-xl">Add Article</div>
          <div className="w-48 h-48 border-4 border-lgu-green rounded-xl mb-2 mt-4">
            <img src={require("./../../../res/img/camera.png")} alt="camera icon" className="w-full h-full rounded-xl" />
          </div>
          <div className="pb-2">
            <div className="flex flex-row items-center border-2 rounded-md border-lgu-green">
              <input
                multiple
                type="file"
                accept="image/png, image/jpeg"
                id="custom-input"
                name="custom-input"
                onChange={(e) => {
                  const selectedFiles = e.target.files;
                  const fileCount = selectedFiles.length;
                  const fileText = fileCount === 1 ? e.target.files[0].name : `${fileCount} files`;
                  setSelectedFile(fileText);
                }}
                hidden
              />
              <label
                htmlFor="custom-input"
                className="block text-xs text-lgu-lime mr-4 py-2 px-4 rounded-sm rounded-tr-none rounded-br-none border-0 font-semibold bg-lgu-green hover:bg-green-900 cursor-pointer"
              >
                Add Image
              </label>
              <label className="text-xs text-slate-500 pr-2">{selectedFile}</label>
            </div>
          </div>
          {/* form */}
          <form>
            <div className="grid grid-cols-2 gap-x-36 m-5 pt-10">
              <div>
                <h1 className="text-md font-bold pb-1 ml-1">Article Title</h1>
                <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                  <input
                    required
                    type="text"
                    className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                    id="content"
                    placeholder="Title Content"
                    value={titleContent}
                    onChange={(e) => setTitleContent(e.target.value)}
                  />
                </div>

                <h1 className="text-md font-bold pb-1">Alternative Description of Image</h1>
                <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                  <input
                    required
                    type="text"
                    className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400"
                    id="alt"
                    placeholder="Alternative Description of Image"
                    value={altDesc}
                    onChange={(e) => setAltDesc(e.target.value)}
                  />
                </div>
              </div>
              {/* second column */}
              <div>
                <h1 className="text-md font-bold pb-1">Select Date and Time</h1>
                <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="absolute right-3 top-3 mt-2 text-lgu-green cursor-pointer"
                      onClick={handleTimeChange}
                    />
                    <DatePicker
                      selected={selectedTime}
                      onChange={handleTimeChange}
                      showTimeSelect
                      timeFormat="HH:mm"
                      timeIntervals={15}
                      dateFormat="MMMM d, yyyy h:mm aa"
                      className="block h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400 cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <h1 className="text-md font-bold pb-1">Select Article Category</h1>
                  <div className="relative mb-6 mt-1 text-left" data-te-input-wrapper-init>
                    <div className="relative">
                      <div
                        onClick={toggleCategoryDropdown}
                        className="h-14 rounded border border-1 w-80 bg-transparent px-3 py-[0.32rem] leading-[1.6] dark:text-black dark:placeholder-text-gray-400 placeholder-gray-400 cursor-pointer flex justify-between items-center"
                      >
                        <span>{selectedCategory || 'Select Article Category'}</span>
                        <svg
                          className={`h-5 w-5 transition-transform transform ${isOpenCategory ? 'rotate-180' : 'rotate-0'}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    {isOpenCategory && (
                      <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          {['General Articles', 'Sports Articles'].map((category, index) => (
                            <div
                              key={index}
                              onClick={() => selectCategory(category)}
                              className="flex justify-between items-center px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                            >
                              <div>{category}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
            <h1 className="text-md font-bold pb-1 ml-2">Article Content</h1>
            <div className="relative mb-3 mx-2">
              <textarea
                className="peer m-0 block h-80 w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-gray-300 focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-black dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
                placeholder="Write the Article Content here..."
              />
            </div>
            <div className='flex justify-between pb-5'>
              <div className='flex'>
                <div className="pr-2">
                  <button type="submit" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })} className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                    {type === "ADD" ? "Save" : "Save Changes"}
                  </button>
                </div>
                <div >
                  <button type="submit"
                    onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                    className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-lgu-yellow dark:hover-bg-yellow-100 dark:focus:ring-yellow-300">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>


    </>
  );
}
