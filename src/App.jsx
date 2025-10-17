// src/App.jsx
import React from 'react';
import UserProfileBanner from './components/UserProfileBanner/UserProfileBanner';
import ApprovalRequestList from './components/ApprovalRequestList/ApprovalRequestList';
import './index.css';

const App = () => {
  const user = {
    lastName: 'Иванов',
    firstName: 'Иван',
    position: 'Руководитель центра',
  };

  const requests = [
    {
      title: 'Тема заявки 1',
      author: 'Автор 1',
      createdDate: '15.10.2025',
      assignedDate: '15.10.2025',
      status: 'На согласовании',
      dueDate: '15.10.2025',
    },
    {
      title: 'Тема заявки 2',
      author: 'Автор 2',
      createdDate: '15.10.2025',
      assignedDate: '15.10.2025',
      status: 'На согласовании',
      dueDate: '15.10.2025',
    },
    {
      title: 'Тема заявки 3',
      author: 'Автор 3',
      createdDate: '15.10.2025',
      assignedDate: '15.10.2025',
      status: 'На согласовании',
      dueDate: '15.10.2025',
    },
  ];

  return (
    <div className="app-container">
      <UserProfileBanner user={user} />
      <ApprovalRequestList requests={requests} />
    </div>
  );
};

export default App;