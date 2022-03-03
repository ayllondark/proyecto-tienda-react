import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Instalar el snippet: ES7 React/Redux/GraphQL/React-Native snippets
// Llamar a este snipet con el comando Rafce y seleccionamos la 2da
import Home from '@pages/Home.jsx';
import NotFound from '@pages/NotFound.jsx';

import Layout from '@containers/Layout.jsx';
import Login from '@pages/Login.jsx';
import RecoveryPassword from '@pages/RecoveryPassword.jsx';
import SendEmail from '@pages/SendEmail.jsx';
import NewPassword from '@pages/NewPassword.jsx';
import MyAccount from '@pages/MyAccount.jsx';
import CreateAccount from '@pages/CreateAccount.jsx';
import Checkout from '@pages/Checkout.jsx';
import Orders from '@pages/Orders.jsx';
import AppContext from '@context/AppContext.js';
import useInitialState from '@hooks/useInitialState.js';

import '@styles/global.css';


const App = () => {
    const initialState = useInitialState();
    return (
        
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/recovery-password" element={<RecoveryPassword />} />
                            <Route path="/send-email" element={<SendEmail />} />
                            <Route path="/new-password" element={<NewPassword />} />
                            <Route path="/account" element={<MyAccount />} />
                            <Route path="/signup" element={<CreateAccount />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/orders" element={<Orders />} />
                            <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
        
    );
}

export default App;


