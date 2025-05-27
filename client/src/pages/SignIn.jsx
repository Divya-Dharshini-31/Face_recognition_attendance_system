import React from 'react';
import styles from './SignIn.module.css';
import faceImage from '../assets/face-image.png'; // Replace with actual image
import google from '../assets/google.jpeg';
import facebook from '../assets/facebook.jpg';
import linkedin from '../assets/linkedin.png';
const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <img src={faceImage} alt="Face Recognition" className={styles.faceImage} />
        <h2 className={styles.heading}>FACE RECOGNITION ATTENDANCE SYSTEM</h2>
      </div>
      <div className={styles.rightPanel}>
        <h2>Welcome!</h2>
        <h3>Sign in</h3>
        <form className={styles.form}>
          <input type="email" placeholder="Email:" required />
          <input type="password" placeholder="Password:" required />
          <div className={styles.forgot}>Forgot Your Password?</div>
          <button type="submit">Sign In</button>
        </form>
        <div className={styles.separator}>Or</div>
        <div className={styles.socialIcons}>
          <img src={google} alt="Google" />
          <img src={facebook} alt="Facebook" />
          <img src={linkedin} alt="LinkedIn" />
        </div>
        <p className={styles.switch}>
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
