import React from 'react';
import InvestAddEditContent from '../../../components/InvestAddEditContent';


// Your main component or container component
function AdminInvestOpportunities() {
  return (
    <div className="ml-10 mt-6 mb-6 w-full flex-shrink-0 h-screen overflow-auto border-2 border-gray-500 rounded shadow-lg">
      {/* Use the imported component*/}
      <InvestAddEditContent title="Investment Opportunities" type="ADD" contentBody={{}} />
    </div>
  );
}

export default AdminInvestOpportunities