import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ActionButton from '../../components/ActionButton/ActionButton.jsx';
import styles from './ApprovalRequestList.module.css';
import { requests as initialRequests } from '../../data'; // Импортируем данные
import NoRowsOverlay from '../../components/NoRowsOverlay/NoRowsOverlay';
import ErrorOverlay from '../../components/ErrorOverlay/ErrorOverlay';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const ApprovalRequestList = ({ onRefresh }) => {
  const [requests, setRequests] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests();
  }, [onRefresh]);

  const fetchRequests = async () => {
    try {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 3000));
      setRequests(initialRequests);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCommentClick = () => {
    setError('Произошла ошибка при добавлении комментария');
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <ErrorOverlay errorMessage={error} />;
  }

  if (requests.length === 0) {
    return <NoRowsOverlay />;
  }

  return (
    <Box className={styles.requestList}>
      {requests.map((request, index) => (
        <Box key={index} className={styles.requestItem}>
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
            <Typography variant="body2">{request.description}</Typography>
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
              onClick={handleCommentClick}
              disabled={request.isBlocked}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ApprovalRequestList;