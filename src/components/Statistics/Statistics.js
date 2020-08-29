import React from 'react';
import PropTypes from 'prop-types';

import StatisticsList from './StatisticsList';
import s from './s.module.scss';

const Statistics = ({ title, statistics }) => {
  const isRenderTitle = title;

  return (
    <section className={s.statistics}>
      {isRenderTitle && <h2 className={s.titleStat}>{title}</h2>}

      <StatisticsList statistics={statistics} />
    </section>
  );
};

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
