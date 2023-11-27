import React from 'react';
import { LguSvAddEditContent } from '../../../components/LguSvAddEditContent';


// Your main component or container component
function AdminPlacesTovisit() {
  return (
    <div className="ml-10 mt-6 mb-6 w-full flex-shrink-0 h-screen overflow-auto border-2 border-gray-500 rounded shadow-lg">
      {/* Use the imported component*/}
      <LguSvAddEditContent title="Places To Visit" categories={['Category1', 'Category2']} type="ADD" contentType="Places To Visit" contentBody={{}} />
    </div>
  );
}

export default AdminPlacesTovisit
