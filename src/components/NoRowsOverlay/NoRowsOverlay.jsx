// src/components/NoRowsOverlay/NoRowsOverlay.jsx
import React from 'react';
import styles from './NoRowsOverlay.module.css';

const NoRowsOverlay = () => {
  return (
    <div className={styles.overlay}>
      <p>У вас нет заявок на согласование.</p>
    </div>
  );
};

export default NoRowsOverlay;