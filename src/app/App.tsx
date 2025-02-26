import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';

import Home from '../modules/Home/Home';
import Header from '../shared/components/Layout/Header/Header';
import PhillPage from '@/modules/Home/components/PhillPage/PhillPage';

import './App.css';

const { Content } = Layout;

const MainLayout: React.FC = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    fontFamily: 'Roboto'
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
                    <Route path="/philosophy-shegol" element={<Home />} />
                    <Route path="/philosophy-shegol/:name" element={<PhillPage />} />
                    <Route path="/" element={<Navigate to="/philosophy-shegol" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;