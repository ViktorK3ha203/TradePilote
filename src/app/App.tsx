import { Suspense, useState } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { Modal } from 'shared/ui/modal/Modal';

const App = () => {
    const { theme, toggleTheme } = useTheme();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={classNames('app', {}, [theme])}>
            <header className='header'>
                <Link to={'/'}>Main page</Link>
                <div className='theme-switcher' onClick={() => setIsOpen(true)}><span>Login</span></div>
                <div className='theme-switcher' onClick={toggleTheme}><span>Toggle</span></div>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <h2>Registration form</h2>
                        <form >
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="confirmPassword">Confirm password:</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required
                                />
                            </div>
                            <button type="submit">Register</button>
                        </form>
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
