import React, { useEffect, useState } from 'react'
import { PATH_NAME } from '../../Variables/GLOBAL_VARIABLE';
import Banner from '../../components/Banner';

const InputTypes = {
    Text: "ONE_LINE_TEXT",
    Number: "ONE_LINE_NUMBER",
    OpenEnded: "OPEN_ENDED",
    Radio: "RADIO_BUTTONS",
    Checkbox: "CHECKBOXES"
}

export default function SurveyPage() {
    const [formData, setFormData] = useState({});
    const [data, setData] = useState([]);
    useEffect(() => {
        var newData = [
            {
                questionID: 1,
                questionType: InputTypes.Text,
                questionDetails: {
                    question: "What is your name?",
                    choices: []
                }
            },
            {
                questionID: 2,
                questionType: InputTypes.Number,
                questionDetails: {
                    question: "Phone Number",
                    choices: []
                }
            },
            {
                questionID: 3,
                questionType: InputTypes.Radio,
                questionDetails: {
                    question: "Gender",
                    choices: ["Man", "Woman", "Nonbinary", "Other"]
                }
            },
            {
                questionID: 4,
                questionType: InputTypes.Checkbox,
                questionDetails: {
                    question: "What do you play?",
                    choices: ["Minecraft", "Roblox", "Something fun", "Mobile Legends", "Genshin Impact"]
                }
            },
            {
                questionID: 5,
                questionType: InputTypes.OpenEnded,
                questionDetails: {
                    question: "What are your opinions on those games?",
                    choices: []
                }
            },
        ]
        setData(newData)
        var dict = {}
        for (let i = 0; i < newData.length; i++) {
            dict[newData[i].questionID] = newData[i].questionType !== InputTypes.Checkbox ? "" : [];
        }
        setFormData(dict)
    }, [])

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
                    {
                        data.map((dataContents) => {
                            return (
                                <InputManager
                                    key={dataContents.questionID}
                                    type={dataContents.questionType}
                                    data={{
                                        "label": dataContents.questionDetails.question ? dataContents.questionDetails.question : "",
                                        "formData": formData[dataContents.questionID],
                                        "handleInputChange": handleInputChange,
                                        "name": dataContents.questionID,
                                        "value": dataContents.questionDetails.choices ?
                                            generateValues(dataContents.questionDetails.choices)
                                            :
                                            null
                                    }}
                                />
                            )
                        })
                    }
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
function generateValues(value) {
    let valueList = []
    for (var i in value) {
        valueList.push({ key: value[i], value: value[i].toLowerCase() })
    }
    return valueList;
}
function InputManager({ type, data }) {
    /**
     * This manages which input to use.
     * @param  {InputTypes} type this is where the type of input is defined.
     * @param  {Object} data this is a js object of data to be passed onto the tags.
     * label, formData, handeInputChange, name, value
    */
    switch (type) {
        case InputTypes.Text:
            return (
                <OneLineTextInput
                    name={data["name"]}
                    label={data["label"]}
                    handleInputChange={data["handleInputChange"]}
                    formData={data["formData"]}
                />
            );
        case InputTypes.Number:
            return (
                <OneLineNumberInput
                    name={data["name"]}
                    label={data["label"]}
                    handleInputChange={data["handleInputChange"]}
                    formData={data["formData"]}
                />
            );
        case InputTypes.Radio:
            return (
                <RadioButtons
                    name={data["name"]}
                    label={data["label"]}
                    values={data["value"]}
                    onChange={data["handleInputChange"]}
                    check={data["formData"]}
                />
            )
        case InputTypes.Checkbox:
            return (
                <Checkboxes
                    name={data["name"]}
                    label={data["label"]}
                    values={data["value"]}
                    onChange={data["handleInputChange"]}
                    check={data["formData"]}
                />
            )
        case InputTypes.OpenEnded:
            return (
                <OpenEndedInput
                    name={data["name"]}
                    label={data["label"]}
                    handleInputChange={data["handleInputChange"]}
                    check={data["formData"]}
                />
            )

    }
}

function OneLineTextInput({ name, label, formData, handleInputChange }) {
    return (
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                type="text"
                id={name}
                name={name}
                value={formData}
                onChange={handleInputChange}
                className="w-full border rounded p-2 border-lgu-yellow border-3" />
        </div>
    )
}
function OneLineNumberInput({ name, label, formData, handleInputChange }) {
    return (
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <input
                type="number"
                id={name}
                name={name}
                value={formData}
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
        <label className="items-center ml-5">
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
        <label className="items-center ml-5">
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
function OpenEndedInput({ label, name, formData, handleInputChange }) {
    return (
        <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <textarea
                id={name}
                name={name}
                value={formData}
                onChange={handleInputChange}
                className="w-full border rounded p-2 border-lgu-yellow border-3 resize-none"
                rows="4"
            />
        </div>
    );
}