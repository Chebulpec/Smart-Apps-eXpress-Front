import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './ApprovalRequestList.module.css';

const ApprovalRequestItem = ({ request }) => {
  return (
    <Box className={styles.requestItem}>
      <Box className={styles.requestHeader}>
        <Typography variant="h6" className={styles.requestTitle}>
          {request.title}
        </Typography>
        <Typography variant="body2" className={styles.requestAuthor}>
          Автор: {request.author}
        </Typography>
      </Box>
      <Box className={styles.requestDetails}>
        <Box className={styles.dateInfo}>
          <Typography variant="body2">Создана: {request.createdDate}</Typography>
          <Typography variant="body2">Назначена: {request.assignedDate}</Typography>
        </Box>
        <Box className={styles.statusInfo}>
          <Typography variant="body2">Статус: {request.status}</Typography>
          <Typography variant="body2">Согласовать до: {request.dueDate}</Typography>
        </Box>
      </Box>
      <Box className={styles.description}>
        <Typography variant="body2">Описание заявки</Typography>
      </Box>
      <Box className={styles.actions}>
        <CustomButton
          icon={<div className={styles.icon}>✅</div>}
          text="СОГЛАСОВАТЬ"
          onClick={() => console.log('Approve')}
          disabled={request.isBlocked}
        />
        <CustomButton
          icon={<div className={styles.icon}>❌</div>}
          text="ОТКЛОНИТЬ"
          onClick={() => console.log('Reject')}
          disabled={request.isBlocked}
        />
        <CustomButton
          icon={<div className={styles.icon}>💬</div>}
          text="КОММЕНТАРИЙ"
          onClick={() => console.log('Comment')}
          disabled={request.isBlocked}
        />
      </Box>
    </Box>
  );
};

const ApprovalRequestList = ({ requests }) => {
  return (
    <Box className={styles.requestList}>
      {requests.map((request, index) => (
        <ApprovalRequestItem key={index} request={request} />
      ))}
    </Box>
  );
};

export default ApprovalRequestList;