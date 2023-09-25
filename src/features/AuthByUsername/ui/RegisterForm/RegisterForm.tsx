import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './RegisterForm.module.scss';
import { registerUser } from 'entities/User/modal/slice/userSlice';
import { AppDispatch } from 'app/providers/StoreProvider/config/store';

interface RegisterFormProps {
    className?: string;
}

export const RegisterForm = ({ className }: RegisterFormProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useDispatch<AppDispatch>();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        dispatch(registerUser({ username, password }));
    };

    return (
        <div className={classNames(cls.RegisterForm, {}, [className])}>
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
                <input
                    type="password"
                    className={cls.input}
                    placeholder={('Подтвердите пароль')}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                    className={cls.registerBtn}
                    type="submit"
                >
                    {('Зарегистрироваться')}
                </button>
            </form>
        </div>
    );
};
