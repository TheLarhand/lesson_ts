import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayoute from '../layouts/MainLayoute';
import { useDispatch, useSelector } from 'react-redux';
import {
    fetchUsers,
    addUser,
    deleteUser,
    selectAllUsers,
    selectUsersLoading,
    selectUsersError,
    clearError
} from '../store/slices/usersSlice';
import { type AppDispatch } from '../store/store';

const UsersPage: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const users = useSelector(selectAllUsers);
    const loading = useSelector(selectUsersLoading);
    const error = useSelector(selectUsersError);

    const [newUserName, setNewUserName] = useState('');
    const [newUserEmail, setNewUserEmail] = useState('');
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch])

    const handleAddUser = async () => {
        if (newUserName.trim() && newUserEmail.trim()) {
            try {
                await dispatch(addUser({
                    name: newUserName.trim(),
                    email: newUserEmail.trim()
                })).unwrap();

                setNewUserName('')
                setNewUserEmail('')
                setShowForm(false)
            } catch (error) {
                console.error('Ошибка создания пользователя', error);
            }
        }
    }

    const handleDeleteUser = async (userId: number) => {
        if (window.confirm('Уверены что хотите удалить пользователя?')) {
            try {
                await dispatch(deleteUser(userId)).unwrap();
            } catch (error) {
                console.error('Ошибка удаления пользователя', error);
            }

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
                        <button
                            onClick={handleAddUser}
                            disabled={loading}
                        >
                            Добавить
                        </button>
                    </div>
                )}

                <div>
                    <h2>Список пользователей</h2>
                    {loading && (
                        <h1>Загрузка...</h1>
                    )}

                    {error && (
                        <p>Ошибка {error}</p>
                    )}
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
