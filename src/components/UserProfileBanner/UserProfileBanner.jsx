import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './UserProfileBanner.module.css';

const UserProfileBanner = ({ user }) => {
  const initials = `${user.lastName.charAt(0)}${user.firstName.charAt(0)}`;
  const pendingRequestsCount = 4000;

  return (
    <Box className={styles.card}>
      <Box className={styles.avatarContainer}>
        <Box className={styles.avatar}>
          <Box className={styles.requestsCount}>{pendingRequestsCount}</Box>
          {initials}
        </Box>
      </Box>
      <Box className={styles.userInfo}>
        <Typography variant="body2" component="span" className={styles.fio}>
          ФИО:
        </Typography>
        <Typography variant="h6" component="span" className={styles.fullName}>
          {`${user.lastName} ${user.firstName}`}
        </Typography>
        <Typography
          variant="body2"
          component="span"
          className={styles.position}
        >
          {user.position}
        </Typography>
      </Box>
    </Box>
  );
};

export default UserProfileBanner;
