import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayoute from '../layouts/MainLayoute';

const AboutPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <MainLayoute>
            <div className="container">
                <h1>О нас</h1>
                <p>Такая штука нужна если на сайте отдельно от навигационный пнели должен происходить роутинг</p>
                <button onClick={() => navigate('/')}>
                    Вернуться на главную (программно)
                </button>
            </div>
        </MainLayoute>
    );
};

export default AboutPage;
