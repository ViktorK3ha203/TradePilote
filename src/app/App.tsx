import { Suspense } from 'react';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';

const App = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <header className='header'>
                <Link to={'/'}>Main page</Link>
                <div className='theme-switcher' onClick={toggleTheme}><span>Toggle</span></div>
            </header>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path={'/'} element={<MainPage />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    )
}

export default App;
