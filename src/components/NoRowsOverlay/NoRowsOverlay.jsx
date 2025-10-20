// src/components/NoRowsOverlay/NoRowsOverlay.jsx
import React from 'react';
import styles from './NoRowsOverlay.module.css';

const NoRowsOverlay = () => {
  return (
    <div className={styles.errorBox}>
      <div className={styles.content}>
        <div>
          <h2 className={styles.errorTitle}>Нет заявок</h2>
          <p className={styles.errorMessage}>У вас нет заявок на согласование.</p>
        </div>
      </div>
    </div>
  );
};

export default NoRowsOverlay;