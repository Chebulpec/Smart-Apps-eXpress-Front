import React from 'react';
import UserProfileBanner from './components/UserProfileBanner/UserProfileBanner';
import ApprovalRequestList from './components/ApprovalRequestList/ApprovalRequestList';
import './index.css';
import { user, requests } from './data'; // Импорт данных

const App = () => {
  return (
    <div className="app-container">
      <UserProfileBanner user={user} />
      <ApprovalRequestList requests={requests} />
    </div>
  );
};

export default App;