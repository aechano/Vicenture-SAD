import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { API } from '../../../Variables/GLOBAL_VARIABLE';
import Cookies from 'js-cookie';

export default function Analytics() {
    const chartRef = useRef(null);
    const [newAccounts, setNewAccounts] = useState([0, 0, 0]);
    const [newAccountsLabels, setNewAccountsLabels] = useState(["", "", ""]);
    const [userData, setUserData] = useState({
        labels: newAccounts,
        datasets: [
            {
                data: newAccountsLabels, // Replace with your actual data
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            },
        ],
    });
    const [userActivityData, setUserActivityData] = useState([]);
    const [investmentRelatedData, setInvestmentRelatedData] = useState([]);
    const [newUserAccData, setNewUserAccData] = useState([]);

    useEffect(() => {
        axios.get(API.analyticsGetAll, {
            headers: { "Authorization": `Bearer ${Cookies.get("token")}` },
            withCredentials: true
        })
            .then((response) => response.data)
            .then((data) => {
                var accountsData = []
                var accountsLabelData = []
                var new_tourist = 0;
                var new_investor = 0;
                var new_citizen = 0;
                var new_all_acct = 0;
                for (var acct of data.newAccounts) {
                    if (acct.key === "NEW_TOURIST_ACCOUNTS") {
                        accountsData.push(parseInt(acct.value));
                        accountsLabelData.push("Tourist");
                        new_tourist = acct.value;
                    } else if (acct.key === "NEW_INVESTOR_ACCOUNTS") {
                        accountsData.push(parseInt(acct.value));
                        accountsLabelData.push("Investor");
                        new_investor = acct.value;
                    } else if (acct.key === "NEW_CITIZEN_ACCOUNTS") {
                        accountsData.push(parseInt(acct.value));
                        accountsLabelData.push("Citizen")
                        new_citizen = acct.value;
                    } else if (acct.key === "NEW_ACCOUNTS") {
                        new_all_acct = acct.value;
                    }
                }
                setNewAccounts(accountsData);
                setNewAccountsLabels(accountsLabelData);

                var fad_post = 0;
                var new_comm = 0;
                var web_enga = 0;
                for (var engagement of data.endUserEngagement) {
                    if (engagement.key === "NEW_FORUMS") {
                        fad_post = engagement.value;
                    } else if (engagement.key === "NEW_COMMENTS") {
                        new_comm = engagement.value;
                    } else if (engagement.key === "OVERALL_ENGAGEMENTS") {
                        web_enga = engagement.value;
                    }
                }

                setUserActivityData([
                    { activityName: "New Forums and Discussions Posts", details: fad_post },
                    { activityName: "New Comments", details: new_comm },
                    { activityName: "Overall Website Engagement", details: web_enga },
                ]);

                var webpage_views = 0;
                var this_week = "None";
                for (var invest of data.investmentActivity) {
                    if (invest.key === "HIGHEST_INVESTMENT_CONTENT") {
                        this_week = invest.value;
                    } else if (invest.key === "OVERALL_INVESTMENT_VIEWS") {
                        webpage_views = invest.value;
                    }
                }

                setInvestmentRelatedData([
                    { activityName: "Overall Invest Webpage Visits", details: webpage_views },
                    { activityName: "Most Visited Investment Webpage", details: this_week }
                ]);

                setNewUserAccData([
                    { activityName: "New Citizen Account", details: new_citizen },
                    { activityName: "New Tourist Account", details: new_tourist },
                    { activityName: "New Investor Account", details: new_investor },
                    { activityName: "New Accounts", details: new_all_acct },
                ]);
            });
    }, []);

    useEffect(() => {
        setUserData({
            labels: newAccounts,
            datasets: [
                {
                    data: newAccountsLabels, // Replace with your actual data
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                },
            ],
        });
    }, [newAccounts]);

    useEffect(() => {
        const chartCanvas = chartRef.current;
        if (chartCanvas) {
            if (chartCanvas.chartInstance) {
                chartCanvas.chartInstance.destroy();
            }
            chartCanvas.chartInstance = new Chart(chartCanvas.getContext('2d'), {
                type: 'doughnut',
                data: userData,
            });
        }
    }, [userData]);

    return (
        <div className="flex">
            <h1 className="text-3xl font-bold mb-4 mt-8 ml-4">Web Analytics</h1>
            {/* First container */}
            <div className="w-10/11 ml-18 mt-4">
                {/* Container for First-Level and Investment-Related Activity */}
                <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-8 mt-16 mb-8 font-regular text-center">
                    <p className="mt-4 font-bold">End-User Engagement</p>
                    <div className="ml-2 mt-4">
                        <GenericList data={userActivityData} renderFunction={(item) => <UserActivity {...item} />} />
                    </div>
                </div>

                <div className="border-2 border-lgu-green w-80 h-80 rounded-md ml-8 mt-8 mb-8 text-center">
                    <p className="mt-4 font-bold">New Accounts</p>
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