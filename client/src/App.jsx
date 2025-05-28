// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notifications from './components/Notifications';

import SelectRole from './components/Auth/SelectRole';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import OtpVerification from './pages/OtpVerification';
import ResetPassword from './pages/ResetPassword';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} /> {/* Show login by default */}
        <Route path="/select-role" element={<SelectRole />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/otp" element={<OtpVerification />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
};
export default App;
