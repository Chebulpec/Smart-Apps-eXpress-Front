import React, { useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import styles from './UserProfileBanner.module.css';

const UserProfileBanner = ({ user, onRefresh }) => {
  const initials = `${user.lastName.charAt(0)}${user.firstName.charAt(0)}`;
  const pendingRequestsCount = 4000;

  const handleRefreshClick = () => {
    onRefresh(); // Вызов пропса onRefresh для обновления списка заявок
  };

  return (
    <Box className={styles.card}>
      <Box className={styles.avatarContainer}>
        <Box className={styles.avatar}>
          {initials}
          <Box className={styles.requestsCount}>{pendingRequestsCount}</Box>
        </Box>
      </Box>
      <Box className={styles.userInfo}>
        <Typography variant="body2" component="span" className={styles.fio}>
          ФИО:
        </Typography>
        <Typography variant="h6" component="span" className={styles.fullName}>
          {`${user.lastName} ${user.firstName}`}
        </Typography>
        <Typography variant="body2" component="span" className={styles.position}>
          {user.position}
        </Typography>
      </Box>
      <Box className={styles.refreshButton}>
        <IconButton onClick={handleRefreshClick}>
          <RefreshIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default UserProfileBanner;