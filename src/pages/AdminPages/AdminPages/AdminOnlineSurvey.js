import React, { useState, useEffect } from 'react';

const AdminOnlineSurvey = () => {
  const [surveyTitle, setSurveyTitle] = useState('');
  const [surveyDescription, setSurveyDescription] = useState('');
  const [customFormsLink, setCustomFormsLink] = useState('');
  const [surveys, setSurveys] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  

  useEffect(() => {
    // Load surveys from localStorage on component mount
    const savedSurveys = JSON.parse(localStorage.getItem('surveys')) || [];
    setSurveys(savedSurveys);
  }, []);

  useEffect(() => {
    // Save surveys to localStorage whenever surveys state changes
    localStorage.setItem('surveys', JSON.stringify(surveys));
  }, [surveys]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      // Edit existing survey
      const updatedSurveys = [...surveys];
      updatedSurveys[editIndex] = { surveyTitle, surveyDescription, customFormsLink };
      setSurveys(updatedSurveys);
      setEditIndex(null);
    } else {
      // Add new survey
      setSurveys([...surveys, { surveyTitle, surveyDescription, customFormsLink }]);
    }

    // Clear form fields
    setSurveyTitle('');
    setSurveyDescription('');
    setCustomFormsLink('');
  };

  const handleEdit = (index) => {
    // Set form fields with the values of the selected survey for editing
    const selectedSurvey = surveys[index];
    setSurveyTitle(selectedSurvey.surveyTitle);
    setSurveyDescription(selectedSurvey.surveyDescription);
    setCustomFormsLink(selectedSurvey.customFormsLink);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    // Delete the selected survey
    const updatedSurveys = surveys.filter((_, i) => i !== index);
    setSurveys(updatedSurveys);
    setEditIndex(null);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Online Survey</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-lg mb-1" htmlFor="surveyTitle">
            Survey Title:
          </label>
          <input
            type="text"
            id="surveyTitle"
            className="border-2 border-lgu-green rounded w-full p-2"
            placeholder="Enter survey title..."
            value={surveyTitle}
            onChange={(e) => setSurveyTitle(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-1" htmlFor="surveyDescription">
            Survey Description:
          </label>
          <textarea
            id="surveyDescription"
            className="border-2 border-lgu-green rounded w-full p-2"
            placeholder="Enter survey description..."
            value={surveyDescription}
            onChange={(e) => setSurveyDescription(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-1" htmlFor="customFormsLink">
            Google Forms Link:
          </label>
          <input
            type="text"
            id="customFormsLink"
            className="border-2 border-lgu-green rounded w-full p-2"
            placeholder="Enter Google Forms link..."
            value={customFormsLink}
            onChange={(e) => setCustomFormsLink(e.target.value)}
          />
        </div>

        <button type="submit" className="bg-lgu-green text-white p-2 rounded mt-2">
          {editIndex !== null ? 'Update Survey' : 'Add Survey'}
        </button>
      </form>


      {/* Display the list of surveys */}
      <ul>
        {surveys.map((survey, index) => (
          <li key={index} className={`border-2 border-lgu-green rounded p-4 mb-4 mt-8 flex justify-between items-center ${
            editIndex === index ? 'bg-gray-100' : '' // Add background color for the edited survey
          }`}
          >
            <div>
              <p className="text-lg font-semibold mb-2">{survey.surveyTitle}</p>
              <p className="mb-2">{survey.surveyDescription}</p>
              <p className="mb-2">{survey.customFormsLink}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-lgu-green text-white p-2 rounded hover:bg-gray transition duration-300"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-700 transition duration-300"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminOnlineSurvey
