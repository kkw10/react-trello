import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <div>Home...</div>
      <div>
        Board List:
        <ul>
          <li>
            <Link to="/board/1">Board 1</Link>
          </li>
          <li>
            <Link to="/board/2">Board 2</Link>
          </li>
        </ul>
      </div>    
    </>
  );
};

export default HomePage;
