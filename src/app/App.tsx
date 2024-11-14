import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';

import Home from '../modules/Home/Home';
import Header from '../shared/components/Layout/Header/Header';
import About from '@/modules/About/About';

// temp
import Test from '@/modules/Home/Test';

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
                    <Route path="/e-book-academy" element={<Home />} />
                    <Route path="/e-book-academy/about" element={<About />} />
                    <Route path="/e-book-academy/test" element={<Test />} />
                    <Route path="/" element={<Navigate to="/e-book-academy" />} />
                    <Route path="*" element={<Navigate to="/e-book-academy" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;