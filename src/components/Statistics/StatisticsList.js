import React from 'react';

import switchColor from './switchColor';

import s from './s.module.scss';

const StatisticsList = ({ statistics }) => (
  <ul className={s.statList}>
    {statistics.map(({ id, label, percentage }) => (
      <li key={id} className={switchColor(label)}>
        <span className={s.label}>{label}</span>
        <span className={s.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
);

export default StatisticsList;
