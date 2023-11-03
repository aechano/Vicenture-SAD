import React, { useState } from 'react';
import Banner from '../../components/Banner';
import { PATH_NAME } from '../../Variables/GLOBAL_VARIABLE';

export default function SampleSurvey() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    favoriteColor: [],
    feedback: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      // Handle checkboxes
      setFormData({
        ...formData,
        [name]: checked
          ? [...formData[name], value]
          : formData[name].filter((item) => item !== value),
      });
    } else {
      // Handle other input types
      setFormData({
        ...formData,
        [name]: type === 'number' ? parseInt(value) : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    // You can send the data to your server for processing here
  };

  return (
    <div>
        <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
            <p>Survey</p>
        </Banner>

        <div className="mx-auto max-w-7xl px-2 py-5 mt-10 sm:px-6 lg:px-8 m-28 bg-gray-50 border-4 border-lgu-yellow rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Sample Survey</h1>
        <form onSubmit={handleSubmit}>
            {/* Text Input */}
            <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="name">
                Name
            </label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border rounded p-2 border-lgu-yellow border-3"/>
            </div>

            {/* Number Input */}
            <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="age">
                Age
            </label>
            <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full border rounded p-2 border-lgu-yellow border-3"
            />
            </div>

            {/* Radio Buttons (Single Answer) */}
            <div className="mb-4">
            <p className="block text-black text-sm font-bold mb-2">Gender</p>
            <label className="inline-flex items-center">
                <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === 'male'}
                onChange={handleInputChange}
                className="form-radio text-blue-500"
                />
                <span className="ml-2">Male</span>
            </label>
            <label className="inline-flex items-center ml-6">
                <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === 'female'}
                onChange={handleInputChange}
                className="form-radio text-blue-500"
                />
                <span className="ml-2">Female</span>
            </label>
            <label className="inline-flex items-center ml-6">
                <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === 'other'}
                onChange={handleInputChange}
                className="form-radio text-blue-500"
                />
                <span className="ml-2">Other</span>
            </label>
            </div>

            {/* Checkbox (Multiple Choice) */}
            <div className="mb-4">
            <p className="block text-black text-sm font-bold mb-2">Favorite Color(s)</p>
            <label className="inline-flex items-center">
                <input
                type="checkbox"
                name="favoriteColor"
                value="red"
                checked={formData.favoriteColor.includes('red')}
                onChange={handleInputChange}
                className="form-checkbox text-blue-500"
                />
                <span className="ml-2">Red</span>
            </label>
            <label className="inline-flex items-center ml-6">
                <input
                type="checkbox"
                name="favoriteColor"
                value="blue"
                checked={formData.favoriteColor.includes('blue')}
                onChange={handleInputChange}
                className="form-checkbox text-blue-500"
                />
                <span className="ml-2">Blue</span>
            </label>
            <label className="inline-flex items-center ml-6">
                <input
                type="checkbox"
                name="favoriteColor"
                value="green"
                checked={formData.favoriteColor.includes('green')}
                onChange={handleInputChange}
                className="form-checkbox text-blue-500"
                />
                <span className="ml-2">Green</span>
            </label>
            </div>


            {/* Open-Ended Question */}
            <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="feedback">
                Any additional comments or feedback?
            </label>
            <textarea
                id="feedback"
                name="feedback"
                value={formData.feedback}
                onChange={handleInputChange}
                className="w-full border rounded p-2 border-lgu-yellow border-3"
                rows="4"
            />
            </div>

            <button
            type="submit"
            className="bg-lgu-green text-lgu-lime font-semibold py-2 px-4 rounded hover-bg-blue-600"
            >
            Submit
            </button>
        </form>
        </div>
    </div>
  );
}
