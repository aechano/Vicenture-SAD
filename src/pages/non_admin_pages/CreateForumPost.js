// App.js or App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreatePost from '../../components/CreatePost';

function CreateForumPost() {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default CreateForumPost;
