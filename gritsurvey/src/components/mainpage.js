import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="question-container">
      <h1>Hi, welcome to The Grit Survey!</h1>
      <h3>Test your level of grit with the following ten questions.</h3>
      <Link to="/q1">Start the survey</Link>
    </div>
  );
};

export default MainPage;
