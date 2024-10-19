import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserSelection = () => {
  
  const navigate = useNavigate();

  const handleSelection = (role) => {
    if (role === 'student') {
      navigate('/student-login');
    } else if (role === 'faculty') {
      navigate('/faculty-login');
    }
  };

  return (
    <div className="user-selection">
      <h2>Select Login Type</h2>
      <button onClick={() => handleSelection('student')}>Student Login</button>
      <button onClick={() => handleSelection('faculty')}>Faculty Login</button>
    </div>
  );
};

export default UserSelection;
