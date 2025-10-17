import React from 'react';
import UserProfileBanner from './components/UserProfileBanner/UserProfileBanner';
import './index.css';

const App = () => {
  const user = {
    lastName: 'Иванов',
    firstName: 'Иван',
    position: 'Руководитель центра',
  };

  return (
    <div className="app-container">
      <UserProfileBanner user={user} />
    </div>
  );
};

export default App;
