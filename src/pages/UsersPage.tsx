import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayoute from '../layouts/MainLayoute';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, selectAllUsers } from '../store/slices/usersSlice';
import { type AppDispatch, type RootState } from '../store/store';

const UsersPage: React.FC = () => {

    const users = useSelector((state: RootState) => selectAllUsers(state))

    const dispatch = useDispatch<AppDispatch>();

    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [showForm, setShowForm] = useState(false);

    const handleAddUser = () => {
        if (newUserName.trim() && newUserEmail.trim()) {
            dispatch(addUser({
                name: newUserName.trim(),
                email: newUserEmail.trim()
            }))

            setNewUserName('')
            setNewUserEmail('')
            setShowForm(false)
        }
    }

    const handleDeleteUser = (userId: number) => {
        if (window.confirm('Уверены что хотите удалить пользователя?')) {
            dispatch(deleteUser(userId))
        }
    }

    return (
        <MainLayoute>
            <div className="container">
                <h1>Пользователи</h1>
                <button
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? 'Отменить' : 'Добавить пользователя'}
                </button>

                {showForm && (
                    <div>
                        <h2>Новый Пользователь</h2>
                        <input
                            type="text"
                            placeholder='Имя'
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder='Email'
                            value={newUserEmail}
                            onChange={(e) => setNewUserEmail(e.target.value)}
                        />
                        <button onClick={handleAddUser}>
                            Добавить
                        </button>
                    </div>
                )}

                <div>
                    <h2>Список пользователей</h2>
                    {users.map(user => (
                        <div key={user.id} className="user-card">
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <Link to={`/users/${user.id}`}>
                                Подробнее
                            </Link>
                            <button onClick={() => handleDeleteUser(user.id)}>
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </MainLayoute>
    );
};

export default UsersPage;
