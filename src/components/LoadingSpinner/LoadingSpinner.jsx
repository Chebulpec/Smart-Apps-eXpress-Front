import React from 'react';
import styles from './LoadingSpinner.module.css'; // Обратите внимание на точку в начале пути

const LoadingSpinner = () => {
  return (
    <div className={styles['loading-spinner']}></div>
  );
};

export default LoadingSpinner;