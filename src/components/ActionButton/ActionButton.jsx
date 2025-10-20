import React from 'react';
import styles from './ActionButton.module.css';

const ActionButton = ({ icon, text, onClick, disabled }) => {
  const buttonClass = `${styles.actionButton} ${disabled ? styles.disabled : ''}`;
  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>
      {<span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default ActionButton;