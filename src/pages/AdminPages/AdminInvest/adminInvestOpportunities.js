import React from 'react';
import InvestAddEditContent from '../../../components/InvestAddEditContent';


// Your main component or container component
function AdminInvestOpportunities() {
  return (
    <div>
      {/* Use the imported component*/}
      <InvestAddEditContent title="Investment Opportunities" type="ADD" contentBody={{}} />
    </div>
  );
}

export default AdminInvestOpportunities