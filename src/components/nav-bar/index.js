import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <Link to="/">홈</Link>
      <Link to="/login">로그인</Link>
    </div>
  );
};

export default NavBar;