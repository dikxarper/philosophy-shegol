import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import Home from '../modules/Home/Home';
import Header from '../shared/components/Layout/Header/Header';
import About from '@/modules/About/About';
import './App.css';

const { Content } = Layout;

const MainLayout: React.FC = () => {
    return (
        <Layout>
            <Header />
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route element={<MainLayout />}>
                    <Route path="/e-book-academy" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/" element={<Navigate to="/e-book-academy" />} />
                    <Route path="*" element={<Navigate to="/e-book-academy" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;