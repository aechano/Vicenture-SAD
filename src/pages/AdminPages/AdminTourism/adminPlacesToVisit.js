import React from 'react';
import { LguSvAddEditContent } from '../../../components/LguSvAddEditContent';


// Your main component or container component
function AdminPlacesTovisit() {
  return (
    <div>
      {/* Use the imported component*/}
      <LguSvAddEditContent title="Places To Visit" categories={['Category1', 'Category2']} type="ADD" contentType="Places To Visit" contentBody={{}} />
    </div>
  );
}

export default AdminPlacesTovisit
