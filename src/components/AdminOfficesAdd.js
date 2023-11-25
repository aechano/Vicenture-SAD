import React, { useState } from "react";
import { BsImage } from 'react-icons/bs';
import { ImEye } from 'react-icons/im';

function OfficesAdd() {
  const [Department, setDepartment] = useState('');
  const [Hotline, setHotline] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [Email, setEmail] = useState('');
  const [Vision, setVision] = useState('');
  const [OrganizationalChart, setOrganizationalChart] = useState(null);
  const [Mandate, setMandate] = useState('');
  const [Mission, setMission] = useState('');
  const [street, setStreet] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setOrganizationalChart(selectedFile);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('fileInput').click();
  };

  const uploadChart = () => {
    // Add logic to handle the chart upload, e.g., sending it to the server
    console.log("Uploading Organizational Chart:", OrganizationalChart);
  };

  const previewInfo = () => {
    // Display preview information (for simplicity, using alert)
    alert(`
      Department/Office: ${Department}
      Contacts:
        - Hotline: ${Hotline}
        - Phone Number: ${PhoneNumber}
        - Email: ${Email}
      Vision: ${Vision}
      Mandate: ${Mandate}
      Mission: ${Mission}
    `);
  };

  return (
    <div className="flex flex-col items-center justify-center p-20 min-h-screen">
      <div className="mx-auto flex flex-col items-center w-full max-w-7xl mb-10 border-2 border-lgu-green rounded-2xl">
        <div className="text-2xl font-bold bg-lgu-green text-white p-4 w-full rounded-tl-xl rounded-tr-xl">Add Offices</div>
        <form>
          <div className="grid grid-cols-2 gap-x-10 m-5 pt-10">
            <div className="mb-4">
              <label htmlFor="department" className="text-lg font-medium text-lgu-green">Department/Office:</label>
              <input
                type="text"
                id="department"
                name="department"
                value={Department}
                onChange={(e) => setDepartment(e.target.value)}
                className="border border-black rounded-md p-2 w-full mb-4"
              />

              <label htmlFor="hotline" className="text-lg font-medium text-lgu-green">Contacts:</label>
              <input
                type="text"
                id="hotline"
                name="hotline"
                value={Hotline}
                onChange={(e) => setHotline(e.target.value)}
                placeholder="Hotline Number"
                className="border border-black rounded-md p-2 w-full mb-4"
              />
              <input
                type="text"
                id="PhoneNumber"
                name="PhoneNumber"
                value={PhoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone Number"
                className="border border-black rounded-md p-2 w-full mb-4"
              />

              <input
                type="text"
                id="email"
                name="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="border border-black rounded-md p-2 w-full mb-6"
              />

            <label htmlFor="vision" className="text-lg font-medium text-lgu-green">Vision:</label>
              <input
                type="text"
                id="vision"
                name="vision"
                value={Vision}
                onChange={(e) => setVision(e.target.value)}
                className="border border-black rounded-md p-2 w-full h-40"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="organizationalChart" className="text-lg font-medium text-lgu-green">Organizational Chart:</label>
              <div className="border border-black rounded-md p-2 w-full flex items-center justify-between">
                <input
                  type="file"
                  id="fileInput"
                  name="organizationalChart"
                  accept=".jpg, .jpeg, .png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <BsImage className="cursor-pointer text-lgu-green" onClick={triggerFileInput} />
                {OrganizationalChart && <p className="ml-2 text-lgu-green">Uploaded: {OrganizationalChart.name}</p>}

              </div>

              <div className="mt-5">
              <label htmlFor="mandate" className="text-lg font-medium text-lgu-green">Mandate:</label>
                <input
                  type="text"
                  id="mandate"
                  name="mandate"
                  value={Mandate}
                  onChange={(e) => setMandate(e.target.value)}
                  className="border border-black rounded-md p-2 w-full h-40"
                />    
              </div>

              <div className="mt-5">
              <label htmlFor="mission" className="text-lg font-medium text-lgu-green">Mission:</label>
                <input
                  type="text"
                  id="mission"
                  name="mission"
                  value={Mission}
                  onChange={(e) => setMission(e.target.value)}
                  className="border border-black rounded-md p-2 w-full h-40"
                />    
              </div>
              
            </div>
          </div>
          

          <div className='flex justify-between pb-5 pt-5 mr-6 mb-4'>
            <div className="flex items-center">
              <span className="text-lgu-black ml-6">Preview: </span>
              <ImEye className="cursor-pointer text-lgu-black ml-2 mt-" onClick={previewInfo} />
            </div>
            <div>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
                className="mr-2 text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                onClick={uploadChart}
                className="text-black bg-lgu-yellow hover:bg-yellow-300 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OfficesAdd;
