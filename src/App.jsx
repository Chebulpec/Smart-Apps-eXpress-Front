import React, { useState } from 'react';
import UserProfileBanner from './components/UserProfileBanner/UserProfileBanner';
import ApprovalRequestList from './components/ApprovalRequestList/ApprovalRequestList';
import './index.css';
import { user, requests } from './data'; // Импорт данных

const App = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <div className="app-container">
      <UserProfileBanner user={user} onRefresh={handleRefresh} />
      <ApprovalRequestList key={refreshKey} onRefresh={refreshKey} />
    </div>
  );
};

export default App;