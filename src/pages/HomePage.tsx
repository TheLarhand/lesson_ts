import React from 'react';
import MainLayoute from "../layouts/MainLayoute";

const HomePage: React.FC = () =>{

  return (
    <div>
      <MainLayoute>
        <div>
          <h1>Главная страница</h1>
          <p>Добро пожаловать</p>
        </div>
      </MainLayoute>
    </div>
  );
};

export default HomePage;
