import React from 'react';
import InvestAddEditContent from '../../../components/InvestAddEditContent';


// Your main component or container component
function AdminReasonsToInvest() {
  return (
    <div>
      {/* Use the imported component*/}
      <InvestAddEditContent title="Reasons To Invest" type="ADD" contentBody={{}} />
    </div>
  );
}

export default AdminReasonsToInvest