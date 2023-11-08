import React, { useState } from 'react';

export default function AdminAnalytics() {
  const [showTownOptions, setShowTownOptions] = useState(false);
  const [showTourismOptions, setShowTourismOptions] = useState(false);
  const [showInvestOptions, setShowInvestOptions] = useState(false);

  const toggleTownOptions = () => {
    setShowTownOptions(!showTownOptions);
  };

  const toggleTourismOptions = () => {
    setShowTourismOptions(!showTourismOptions);
  };

  const toggleInvestOptions = () => {
    setShowInvestOptions(!showInvestOptions);
  };

  return (
    <div className="flex">
      <div className="bg-lgu-yellow w-1/4 p-4">
        <div className="text-xl font-bold text-80733D">Dashboard</div>
        <div className="text-lg font-bold text-lgu-green ml-4">Analytics</div>

        <div className="text-xl font-bold text-80733D mt-4">Pages</div>
        <div className="text-lg  font-bold text-lgu-green ml-4">Homepage</div>

        <div className="cursor-pointer text-lg text-lgu-green font-bold ml-4" onClick={toggleTownOptions}>
          The Town
        </div>

        {showTownOptions && (
          <div className="ml-6">
            <div className="text-lg text-lgu-green">About San Vicente</div>
            <div className="text-lg text-lgu-green">Municipality Profile</div>
            <div className="text-lg text-lgu-green">Municipality Programs</div>
            <div className="text-lg text-lgu-green">Elected Officials</div>
            <div className="text-lg text-lgu-green">Offices</div>
            <div className="text-lg text-lgu-green">Citizen Charter</div>
          </div>
        )}

        <div className="cursor-pointer  font-bold text-lg text-lgu-green ml-4" onClick={toggleTourismOptions}>
          Tourism
        </div>

        {showTourismOptions && (
          <div className="ml-6">
            <div className="text-lg text-lgu-green">Places To Visit</div>
            <div className="text-lg text-lgu-green">Activities</div>
            <div className="text-lg text-lgu-green">Promotional Contents</div>
          </div>
        )}

        <div className="cursor-pointer font-bold text-lg text-lgu-green ml-4" onClick={toggleInvestOptions}>
          Invest 
        </div>

        {showInvestOptions && (
          <div className="ml-6">
            <div className="text-lg text-lgu-green">Investment Opportunities</div>
            <div className="text-lg text-lgu-green">Reasons To Invest</div>
          </div>
        )}

        <div className="text-lg font-bold text-lgu-green ml-4">Transparency</div>

        <div className="text-xl font-bold text-80733D mt-4">Forms</div>
        <div className="text-lg font-bold text-lgu-green ml-4">Online Survey</div>

        <div className="text-xl font-bold text-80733D mt-4">Others</div>
        <div className="text-lg font-bold text-lgu-green ml-4">Live Streaming</div>
        <div className="text-lg font-bold text-lgu-green ml-4">Emergencies</div>
        <div className="text-lg font-bold text-lgu-green ml-4">Reported Contents</div>
      </div>

          {/* Rounded squares (you can adjust the styling as needed) */}
          <div class="border-2 border-lgu-green w-1/4 h-29 rounded-md ml-8 mt-16 mb-8 font-bold text-center">First-Level User Activity
      </div>

      <div class="border-2 border-lgu-green w-1/4 h-29 rounded-md ml-8 mt-16 mb-8 font-bold text-center">
        Investment-Related Activity
      </div>
      <div class="border-2 border-lgu-green w-1/4 h-29 rounded-md ml-4 mt-16 mb-8 font-bold text-center">
        New User Account
      </div>
      <div class="border-2 border-lgu-green w-1/4 h-29 rounded-md ml-8 mt-16 mb-8 font-bold text-center">
        User Account
      </div>

    </div>
  );
}
