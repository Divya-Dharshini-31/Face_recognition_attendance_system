import React, { useState } from 'react';
import styles from './ResetPassword.module.css';
import { useNavigate } from 'react-router-dom';
import lockImg from '../assets/lock.jpeg'; // Replace with actual image path

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    if (password === confirmPassword) {
      // You can add password update logic here
      alert('Password reset successful!');
      navigate('/login'); // Redirect to login page
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={lockImg} alt="Reset Password" className={styles.image} />
        <div className={styles.form}>
          <h2>Reset Password</h2>
          <input
            type="password"
            placeholder="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password:"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleReset} style={{'color':'white','backgroundColor':'#1cb5e0'}}>Reset Password</button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
