import React from 'react';
import PlacesToVisitContent from '../../../lgu_sv_access/PlacesToVisitContent';


// Your main component or container component
function AdminPlacesToVisit() {
  return (
    <PlacesToVisitContent title="Places To Visit" categories={['Category1', 'Category2']} type="ADD" contentType="Places To Visit" contentBody={{}} />
  );
}

export default AdminPlacesToVisit
