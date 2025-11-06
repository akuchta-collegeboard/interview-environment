
import { Outlet } from 'react-router';
import './App.css';
import Navigation from './Navigation';

function App() {
    return (<div className='appContainer'>
                <Navigation />
                <div className='main-content'>
                    <Outlet />
                </div>
            </div>);
}

export default App