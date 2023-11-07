import React, { useState } from 'react';

export default function AdminAnalytics() {
  const sidebarStyle = {
    backgroundColor: '#FFE77B',
    color: '#2D5F2E',
    width: '300px',
    padding: '20px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row', // Arrange children horizontally
  };

  const itemStyle = {
    marginBottom: '10px',
    marginLeft: '20px', // Add left margin to adjust items to the right
    fontWeight: 'bold',
    color: '#2D5F2E',
    fontSize: '20px',
  };

  const itemStyleHomepage = {
    marginLeft: '20px', // Add left margin to adjust items to the right
    fontWeight: 'bold',
    color: '#2D5F2E',
    fontSize: '20px',
  };

  const itemStyleOthers = {
    marginLeft: '20px', // Add left margin to adjust items to the right
    fontWeight: 'bold',
    color: '#2D5F2E',
    fontSize: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#80733D',
  };

  const dropdownItemStyle = {
    cursor: 'pointer',
    marginLeft: '30px', // Adjust the left margin to move items to the right
    marginRight: '20px', // Add a right margin to separate items
  };

  const townStyle = {
    marginLeft: '-10px', // Adjust the left margin to move "The Town" to the left
    marginTop: '10px', // Add negative margin to align with "Homepage" vertically
    marginBottom: '30px',
    fontWeight: 'bold',
    color: '#2D5F2E',
    fontSize: '20px',
  };

  const tourismStyle = {
    marginLeft: '-10px', // Adjust the left margin to move "Tourism" to the left
    marginTop: '10px', // Add negative margin to align with "Homepage" vertically
    marginBottom: '30px',
    fontWeight: 'bold',
    color: '#2D5F2E',
    fontSize: '20px',
  };
  

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
    <div className="admin-analytics-container">
      <div style={containerStyle}>
      <div className="sidebar" style={sidebarStyle}>
        <div style={titleStyle}>Dashboard</div> {/* Analytics */}
        <div className="sidebar-item" style={itemStyle}>Analytics</div>

        <div style={titleStyle}>Pages</div> {/* Homepage */}
        <div className="sidebar-item" style={itemStyleHomepage}>Homepage</div>

        <div style={dropdownItemStyle} onClick={toggleTownOptions}>
          <span style={townStyle}>The Town</span>
        </div>

        {showTownOptions && (
          <div>
            {/* List of the town items*/}
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>About San Vicente</div>
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Municipality Profile</div>
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Municipality Programs</div>
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Elected Officials</div>
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Offices</div>
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Citizen Charter</div>
          </div>
        )}

        <div style={dropdownItemStyle} onClick={toggleTourismOptions}>
          <span style={tourismStyle}>Tourism</span>
        </div>

        {showTourismOptions && (
          <div>
            {/* List of Tourism items*/}
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Places To Visit</div>
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Activities</div>
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Promotional Contents</div>
          </div>
        )}

        <div style={dropdownItemStyle} onClick={toggleInvestOptions}>
            <span style={tourismStyle}>Invest</span>
        </div>

        {showInvestOptions && (
          <div>
            {/* List of Invest items*/}
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Investement Opportunities</div>
            <div style={{ ...dropdownItemStyle, marginLeft: '40px' }}>Reasons To Invest</div>
          </div>
        )}


        <div className="sidebar-item" style={itemStyle}>Transparency</div>

        <div style={titleStyle}>Forms</div> {/* Online Survey */}
        <div className="sidebar-item" style={itemStyle}>Online Survey</div>

        <div style={titleStyle}>Others</div> {/* Others */}
        <div className="sidebar-item" style={itemStyleOthers}>Live Streaming</div>
        <div className="sidebar-item" style={itemStyleOthers}>Emergencies</div>
        <div className="sidebar-item" style={itemStyleOthers}>Reported Contents</div>
      </div>
      </div>



      <div className="main-content">
        {/* Wala pa analytics */}
      </div>
    </div>
  );
}
