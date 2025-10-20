import React from 'react';
import styles from './ErrorOverlay.module.css';

const ErrorOverlay = ({ errorMessage }) => {
  return (
    <div className={styles.errorBox}>
      <div className={styles.content}>
        <div>
          <h2 className={styles.errorTitle}>Error</h2>
          <p className={styles.errorMessage}>{errorMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorOverlay;