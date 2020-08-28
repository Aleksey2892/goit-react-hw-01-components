import React from 'react';
import Statisctics from './Statistics';
import styles from './styles.module.scss';

const StatisticsList = ({ statistics }) => (
  <ul className={styles.statList}>
    {statistics.map(({ id, label, percentage }) => (
      <li key={id} className={styles.item}>
        <Statisctics label={label} percentage={percentage} />
      </li>
    ))}
  </ul>
);

export default StatisticsList;
