import React from 'react';
import Navbar from '../Components/Navbar'; // Navbar komponentining yo‘li
import { Outlet } from 'react-router-dom';
import './MainLayout.css'; // CSS uchun fayl

function MainLayout() {
    return (
        <div className="main-layout">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default MainLayout;
