import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"

import Login from './auth/login';
import AuthModule from './auth/auth_module';
import Main from './components/main';
import Modules from './components/modules';
import Order from './components/order-module/order';
import OrderDashboard from './components/order-module/order-dashboard';
import OrderBrowse from './components/order-module/order/order-browse';
import NewOrder from './components/order-module/order/new-order';
import { ModuleContext } from './contextAPI/contextApi';

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Navigate to="auth/login" replace />}>  </Route>

        <Route path="auth" element={<AuthModule />}>
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="main" element={<Main />}>
          <Route path="modules" element={<Modules />} />

          <Route path="orders" element={<Order />} >
            <Route path="dashboard" element={<OrderDashboard />} />
            <Route path="incomingRequest" element={<OrderBrowse />} />
            <Route path="incomingRequest/new" element={<NewOrder />} />
          </Route>
        </Route>

        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
  );
}

export default App;
