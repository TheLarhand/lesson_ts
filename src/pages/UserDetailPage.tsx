import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { users } from '../shared/mockData/users';
import MainLayoute from '../layouts/MainLayoute';

const UserDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const user = users.find(u => u.id === Number(id));

    if (!user) {
        return (
            <MainLayoute>
                <div className="container">
                    <h1>Пользователь не найден</h1>
                    <Link to="/users">К списку пользователей</Link>
                </div>
            </MainLayoute>
        );
    }

    return (
        <MainLayoute>
            <div className="container">
                <h1>Профиль: {user.name}</h1>
                <p>Email: {user.email}</p>
                <p>ID: {user.id}</p>
                <button onClick={() => navigate('/users')}>К списку</button>
                <button onClick={() => navigate(-1)}>Назад</button>
            </div>
        </MainLayoute>
    );
};

export default UserDetailPage;
