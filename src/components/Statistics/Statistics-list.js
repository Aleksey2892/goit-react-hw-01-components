import React from 'react';
import Statisctics from './Statistics';

const StatisticsList = ({ statistics }) => (
  <ul className="stat-list">
    {statistics.map(({ id, label, percentage }) => (
      <li key={id} className="item">
        <Statisctics label={label} percentage={percentage} />
      </li>
    ))}
  </ul>
);

export default StatisticsList;
