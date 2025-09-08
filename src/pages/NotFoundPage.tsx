import React from 'react';
import { Link } from 'react-router-dom';
import MainLayoute from '../layouts/MainLayoute';

const NotFoundPage: React.FC = () => {
    return (
        <MainLayoute>
            <div className="container">
                <h1>404 - Страница не найдена</h1>
                <Link to="/">Вернуться на главную</Link>
            </div>
        </MainLayoute>
    );
};

export default NotFoundPage;
