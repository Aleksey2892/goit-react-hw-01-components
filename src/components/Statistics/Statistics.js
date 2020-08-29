import React from 'react';
import StatisticsList from './Statistics-list';
import PropTypes from 'prop-types';
import styles from './Styles.module.scss';

const Statistics = ({ title, statistics }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.titleStat}>{title}</h2>}

    <StatisticsList statistics={statistics} />
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,

  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
