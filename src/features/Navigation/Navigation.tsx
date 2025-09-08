import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav>
      <Link to="/" style={{ marginRight: '20px' }}>Главная</Link>
      <Link to="/about" style={{ marginRight: '20px' }}>О нас</Link>
      <Link to="/users" style={{ marginRight: '20px' }}>Пользователи</Link>
    </nav>
  );
};

export default Navigation;
