import React from 'react';
import Nav from './Nav.jsx';

const NotUserProfile = () => {
  return (
    <div>
      <Nav/>
      <h2>This user does not exist on Friendlyst!</h2>
    </div>
  );
};

export default NotUserProfile;