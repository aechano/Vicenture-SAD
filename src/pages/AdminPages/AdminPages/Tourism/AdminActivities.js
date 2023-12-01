import React from 'react';
import PlacesToVisitContent from '../../../lgu_sv_access/PlacesToVisitContent';


// Your main component or container component
function AdminActivities() {
  return (
      <PlacesToVisitContent title="Activities" categories={['Category1', 'Category2']} type="ADD" contentType="Activities" contentBody={{}} />
    
  );
}

export default AdminActivities
