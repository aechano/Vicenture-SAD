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
                    <OneLineTextInput
                        label="Name"
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                    <OneLineNumberInput
                        label="Age"
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                    <RadioButtons
                        label="Gender"
                        name="gender"
                        values={[{ key: "Male", value: "male" }, { key: "Female", value: "female" }, { key: "Other", value: "other" }]}
                        onChange={handleInputChange}
                        check={formData.gender}
                    />
                    <Checkboxes
                        label="Favorite Color(s)"
                        name="favoriteColor"
                        values={[{ key: "Red", value: "red" }, { key: "Blue", value: "blue" }, { key: "Green", value: "green" }]}
                        onChange={handleInputChange}
                        check={formData.favoriteColor}
                    />
                    <OpenEndedInput
                        label="Any additional comments or feedback?"
                        formData={formData.feedback}
                        handleInputChange={handleInputChange}
                    />

                    
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

function OneLineTextInput({ label, formData, handleInputChange }) {
    return (
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="text_input">
                {label}
            </label>
            <input
                type="text"
                id="text_input"
                name="text_input"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border rounded p-2 border-lgu-yellow border-3" />
        </div>
    )
}
function OneLineNumberInput({ label, formData, handleInputChange }) {
    return (
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="number_input">
                {label}
            </label>
            <input
                type="number"
                id="number_input"
                name="number"
                value={formData.age}
                onChange={handleInputChange}
                className="w-full border rounded p-2 border-lgu-yellow border-3"
            />
        </div>
    )
}
function RadioButtons({ label, name, values, onChange, check }) {
    return (
        <div className="mb-4">
            <p className="text-black text-sm font-bold mb-2">{label}</p>
            {
                values.map((item, index) => {
                    return (
                        <div>
                            <RadioButtonItem
                                key={index}
                                item={item}
                                name={name}
                                onChange={onChange}
                                checked={check === item.value}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
function RadioButtonItem({ item, name, onChange, checked }) {
    return (
        <label className="items-center p-5">
            <input
                type="radio"
                name={name}
                value={item.value}
                checked={checked}
                onChange={onChange}
                className="form-radio text-blue-500"
            />
            <span className="ml-2">{item.key}</span>
        </label>
    )
}
function Checkboxes({ label, name, values, onChange, check }) {
    return (
        <div className="mb-4">
            <p className="text-black text-sm font-bold mb-2">{label}</p>
            {
                values.map((item, index) => {
                    return (
                        <div>
                            <CheckboxItems
                                key={index}
                                item={item}
                                name={name}
                                onChange={onChange}
                                checked={check.includes(item.value)}
                            />
                        </div>
                    )
                })
            }
        </div>
    )
}
function CheckboxItems({ item, onChange, name, checked }) {
    return (
        <label className="items-center p-5">
            <input
                type="checkbox"
                name={name}
                value={item.value}
                checked={checked}
                onChange={onChange}
                className="form-checkbox text-blue-500"
            />
            <span className="ml-2">{item.key}</span>
        </label>
    )
}
function OpenEndedInput({ label, formData, handleInputChange }) {
    return (
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor="open_ended">
                {label}
            </label>
            <textarea
                id="open_ended"
                name="open_ended"
                value={formData}
                onChange={handleInputChange}
                className="w-full border rounded p-2 border-lgu-yellow border-3 resize-none"
                rows="4"
            />
        </div>
    );
}