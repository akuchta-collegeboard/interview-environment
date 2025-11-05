
import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router';
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