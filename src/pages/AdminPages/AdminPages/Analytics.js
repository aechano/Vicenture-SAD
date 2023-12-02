import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

// UserActivity component to display a generic user activity
const UserActivity = ({ activityName, details }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="mr-2 mb-4">{activityName}:</div>
      <div className="mb-4">{typeof details === 'object' && details.text ? details.text : details}</div>
    </div>
  );
};

// GenericList component to display a list of user activities
const GenericList = ({ data, renderFunction }) => {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="mb-4">
          {renderFunction(item)}
        </div>
      ))}
    </div>
  );
};

export default function Analytics() {
  const chartRef = useRef(null);

  useEffect(() => {
    // Sample data for user types
    const userData = {
      labels: ['Tourist', 'Investor', 'Citizen'],
      datasets: [
        {
          data: [30, 50, 20], // Replace with your actual data
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    };

    const chartCanvas = chartRef.current;

    if (chartCanvas) {
      // Destroy previous chart if it exists
      if (chartCanvas.chartInstance) {
        chartCanvas.chartInstance.destroy();
      }

      // Create a new chart
      chartCanvas.chartInstance = new Chart(chartCanvas.getContext('2d'), {
        type: 'doughnut',
        data: userData,
      });
    }
  }, []);

  const userActivityData = [
    { activityName: "New Forums and Discussions Posts", details: 5 },
    { activityName: "New Comments", details: 10 },
    { activityName: "New Content Rating", details: 4.5 },
    { activityName: "Overall Website Rating", details: 4.8 },
  ];

  const investmentRelatedData = [
    { activityName: "Invest Web Pages Views", details: 5 },
    { activityName: "This week", details: { text: 'Tourism', value: 10 } },
    { activityName: "This month", details: { text: 'Agriculture', value: 10 } },
    { activityName: "This year", details: { text: 'Infrastructure', value: 10 } },
  ];

  const newUserAccData = [
    { activityName: "New Citizen Account", details: 5 },
    { activityName: "New Tourist Account", details: 96 },
    { activityName: "New Investor Account", details: 80 },
    { activityName: "New Accounts", details: 181 },
  ];

  return (
    <div className="flex">
      <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Web Analytics</h1>
      {/* First container */}
      <div className="w-10/11 ml-18 mt-4">
        {/* Container for First-Level and Investment-Related Activity */}
        <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-8 mt-16 mb-8 font-regular text-center">
          <p className="mt-4 font-bold">First-Level User Activity</p>
          <div className="ml-2 mt-4">
            <GenericList data={userActivityData} renderFunction={(item) => <UserActivity {...item} />} />
          </div>
        </div>

        <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-8 mt-8 mb-8 text-center">
          <p className="mt-4 font-bold">New User Accounts</p>
          <div className="ml-2 mt-4">
            <GenericList data={newUserAccData} renderFunction={(item) => <UserActivity {...item} />} />
          </div>
        </div>
      </div>

      {/* Second container */}
      <div className="w-10/11 ml-16 mt-4">
        {/* Container for New User Account and User Account */}
        <div className="border-2 border-lgu-green w-100 h-80 rounded-md ml-2 mt-16 mb-8 text-center">
          <p className="mt-4 font-bold">Investment Related Activity</p>
          <div className="ml-2 mt-4 text-sm">
            <p className='text-center text-md mb-4 font-bold'>MOST VIEWED INVEST CONTENT TYPE</p>
            <GenericList data={investmentRelatedData} renderFunction={(item) => <UserActivity {...item} />} />
          </div>
        </div>

        {/* User Account Container */}
        <div className="border-2 border-lgu-green w-90 h-90 rounded-md ml-2 mt-8 mb-8 text-center">
          <p className="mt-4 font-bold">User Account</p>

          {/* Doughnut Chart Container */}
          <div className="flex justify-center items-center h-50">
            <canvas ref={chartRef} style={{ width: '40%', height: '30%' }}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
}
