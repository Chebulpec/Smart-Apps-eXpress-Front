import React from 'react';
import { Box, Typography } from '@mui/material';
import ActionButton from '../../components/ActionButton/ActionButton.jsx';
import styles from './ApprovalRequestList.module.css';
import { requests } from '../../data'; // Импортируем данные

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
        <Typography variant="body2">{request.description}</Typography> {/* Отображаем описание заявки */}
      </Box>
      <Box className={styles.actions}>
        <ActionButton
          text="Согласовать"
          onClick={() => console.log('Approve')}
          disabled={request.isBlocked}
        />
        <ActionButton
          text="Отклонить"
          onClick={() => console.log('Reject')}
          disabled={request.isBlocked}
        />
        <ActionButton
          text="Комментарий"
          onClick={() => console.log('Comment')}
          disabled={request.isBlocked}
        />
      </Box>
    </Box>
  );
};

const ApprovalRequestList = () => {
  return (
    <Box className={styles.requestList}>
      {requests.map((request, index) => (
        <ApprovalRequestItem key={index} request={request} />
      ))}
    </Box>
  );
};

export default ApprovalRequestList;