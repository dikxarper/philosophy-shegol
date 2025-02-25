import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';

import Home from '../modules/Home/Home';
import Header from '../shared/components/Layout/Header/Header';
// import About from '@/modules/About/About';

import './App.css';

const { Content } = Layout;

const MainLayout: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: 'Montserrat'
                }
            }}
        >
            <Layout>
                <Header />
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </ConfigProvider>
    );
};

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/phillo-hoot" element={<Home />} />
                    <Route path="/" element={<Navigate to="/phillo-hoot" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;