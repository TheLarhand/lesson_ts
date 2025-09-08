import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../shared/mockData/users';
import MainLayoute from '../layouts/MainLayoute';

const UsersPage: React.FC = () => {
    return (
        <MainLayoute>
            <div className="container">
                <h1>Пользователи</h1>
                {users.map(user => (
                    <div key={user.id} className="user-card">
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                        <Link to={`/users/${user.id}`}>
                            Подробнее 
                        </Link>
                    </div>
                ))}
            </div>
        </MainLayoute>
    );
};

export default UsersPage;
