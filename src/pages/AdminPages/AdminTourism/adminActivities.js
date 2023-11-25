import React from 'react';
import { LguSvAddEditContent } from '../../../components/LguSvAddEditContent';


// Your main component or container component
function AdminActivities() {
  return (
    <div>
      {/* Use the imported component*/}
      <LguSvAddEditContent title="Activities" categories={['Category1', 'Category2']} type="ADD" contentType="Places To Visit" contentBody={{}} />
    </div>
  );
}

export default AdminActivities
