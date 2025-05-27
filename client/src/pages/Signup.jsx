import React from 'react';
import styles from './Signup.module.css';
import faceImage from '../assets/face-image.png'; 

const SignupForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <img src={faceImage} alt="Face Recognition" className={styles.faceImage} />
        <h2 className={styles.title}>FACE RECOGNITION<br />ATTENDANCE SYSTEM</h2>
      </div>
      <div className={styles.rightPane}>
        <h2 className={styles.signupTitle}>Sign up</h2>
        <form className={styles.form}>
          <input type="email" placeholder="Email:" />
          <div className={styles.row}>
            <input type="text" placeholder="First name:" />
            <input type="text" placeholder="Last name:" />
          </div>
          <input type="tel" placeholder="Mobile number:" />
          <input type="password" placeholder="Password:" />
          <input type="password" placeholder="Confirm Password:" />
          <button type="submit" style={{'color':'white','backgroundColor':'#1cb5e0'}}>Next</button>
        </form>
        <p className={styles.footerText}>
          Already have an account? <a href="#">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
