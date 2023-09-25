import { Suspense, useState } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { Modal } from 'shared/ui/modal/Modal';
import { LoginForm } from 'features/AuthByUsername/ui/LoginForm/LoginForm';
import { RegisterForm } from 'features/AuthByUsername/ui/RegisterForm/RegisterForm';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    const [modalContent, setModalContent] = useState<'LOGIN' | 'REGISTER' | null>(null);

    // const token = localStorage.getItem('token');
    const token = false;

    return (
        <div className={classNames('app', {}, [theme])}>
            <header className='header'>

                <Link to={'/'}>Main page</Link>
                {
                    token ?
                        <div className='theme-switcher' onClick={() => setIsOpen(true)}>
                            <span>
                                Logout
                            </span>
                        </div>
                        :
                        <>
                            <div className='theme-switcher' onClick={() => {
                                setIsOpen(true);
                                setModalContent('REGISTER'); }}>
                                <span>Register</span>
                            </div>
                            <div className='theme-switcher' onClick={() => {
                                setIsOpen(true);
                                setModalContent('LOGIN'); }}>
                                <span>Login</span>
                            </div>
                        </>
                }
                <div className='theme-switcher' onClick={toggleTheme}><span>Toggle</span></div>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Modal isOpen={isOpen} onClose={() => { setIsOpen(false); setModalContent(null); }}>
                        {modalContent === 'LOGIN' && <LoginForm />}
                        {modalContent === 'REGISTER' && <RegisterForm />}
                    </Modal>
                    <Routes>
                        <Route path={'/'} element={<MainPage />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}

export default App;
