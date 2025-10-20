// src/components/ErrorOverlay/ErrorOverlay.jsx
import React from 'react';
import styles from './ErrorOverlay.module.css';

const ErrorOverlay = ({ errorMessage }) => {
  return (
    <div className={styles.overlay}>
      <p>Произошла ошибка: {errorMessage}</p>
    </div>
  );
};

export default ErrorOverlay;