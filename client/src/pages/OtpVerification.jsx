import React, { useState } from 'react';
import styles from './OtpVerification.module.css';
import { useNavigate } from 'react-router-dom';
import otpImg from '../assets/otp.jpeg'; // Replace with actual path

const OtpVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isVerified, setIsVerified] = useState(false);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== '' && index < 3) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = () => {
    if (otp.join('') === '7743') { // Replace with your backend OTP validation if needed
      setIsVerified(true);
    } else {
      alert('Invalid OTP!');
    }
  };

  const handleNext = () => {
    navigate('/reset-password');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={otpImg} alt="OTP" className={styles.image} />
        <div className={styles.form}>
          <h2>Enter OTP Code</h2>
          <div className={styles.otpBox}>
            {otp.map((digit, idx) => (
              <input
                key={idx}
                id={`otp-${idx}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(idx, e.target.value)}
              />
            ))}
          </div>

          {!isVerified ? (
            <>
              <button onClick={handleVerify} style={{'color':'white','backgroundColor':'#1cb5e0'}}>Verify OTP</button>
              <p className={styles.note}>Resend otp after: 30s</p>
            </>
          ) : (
            <>
              <p className={styles.success}>OTP verified successfully ✅</p>
              <button onClick={handleNext} style={{'color':'white','backgroundColor':'#1cb5e0'}}>Next</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
