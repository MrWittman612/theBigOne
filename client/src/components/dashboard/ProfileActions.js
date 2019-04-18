import React from 'react';
import {Link} from 'react-router-dom';

const ProfileActions = () => {
  return (
  <div className="btn-grooup mb-4" role="group">
    <Link to="/edit-profile" className="btn btn-lihgt">
      <i className="fas fa-user-circle text-info mr-1" /> Edit Profile
    </Link>
    <Link to="/add-experience" className="btn btn-lihgt">
      <i className="fas fa-user-circle text-info mr-1" /> Add Experience
    </Link>
    <Link to="/add-education" className="btn btn-lihgt">
      <i className="fas fa-user-circle text-info mr-1" /> Add Education
    </Link>
  </div>
  );
};



export default ProfileActions;
