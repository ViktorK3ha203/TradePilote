import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { authenticateUser } from 'entities/User/modal/slice/userSlice';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(authenticateUser({ username, password }));
    };

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={cls.input}
                    placeholder={('Введите username')}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className={cls.input}
                    placeholder={('Введите пароль')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    className={cls.loginBtn}
                    type="submit"
                >
                    {('Войти')}
                </button>
            </form>
        </div>
    );
};
