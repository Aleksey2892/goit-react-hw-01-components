import React from 'react';
// import Statisctics from './Statistics';
import styles from './Styles.module.scss';
import switchColor from './switchColor';

const StatisticsList = ({ statistics }) => (
  <ul className={styles.statList}>
    {statistics.map(({ id, label, percentage }) => (
      <li key={id} className={switchColor(label)}>
        <span className={styles.label}>{label}</span>
        <span className={styles.percentage}>{percentage}%</span>
      </li>
    ))}
  </ul>
);

export default StatisticsList;
