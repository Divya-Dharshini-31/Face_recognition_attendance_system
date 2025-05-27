import React, { useState } from 'react';
import styles from './SelectRole.module.css';
import { FaUserCog, FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';

const SelectRole = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.heading}>SELECT ROLE</h2>
        <div className={styles.roles}>
          <div
            className={`${styles.role} ${selected === 'admin' ? styles.active : ''}`}
            onClick={() => setSelected('admin')}
          >
            <FaUserCog size={40} />
            <span>ADMIN</span>
          </div>
          <div
            className={`${styles.role} ${selected === 'teacher' ? styles.active : ''}`}
            onClick={() => setSelected('teacher')}
          >
            <FaChalkboardTeacher size={40} />
            <span>TEACHER</span>
          </div>
          <div
            className={`${styles.role} ${selected === 'student' ? styles.active : ''}`}
            onClick={() => setSelected('student')}
          >
            <FaUserGraduate size={40} />
            <span>STUDENT</span>
          </div>
        </div>
        <button className={styles.confirmBtn}>Confirm</button>
      </div>
    </div>
  );
};

export default SelectRole;
