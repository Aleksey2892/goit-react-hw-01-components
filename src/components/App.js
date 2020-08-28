//! Profile
import React from 'react';
import Profile from './Profile/Profile';
import user from './Data/user.json';
//=======================================================
//! Statistics
import StatisticsSection from './Statistics/Statistics-section';
import statistics from './Data/statistical-data.json';
//=======================================================
//! FriendList
import FriendList from './Friend-List/Friend-list';
import friends from './Data/friends.json';
//=======================================================
//! TransactionHistory
import TransactionHistory from './Transaction-History/Transaction-history';
import transactions from './Data/transactions.json';
//=======================================================

const App = () => (
  <>
    <Profile user={user} />

    <StatisticsSection title={'Upload stats'} statistics={statistics} />

    <FriendList friends={friends} />

    <TransactionHistory transactions={transactions} />
  </>
);

export default App;
