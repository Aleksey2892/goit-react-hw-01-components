import React from 'react';
import StatisticsList from './Statistics-list';
import PropTypes from 'prop-types';

const StatisticsSection = ({ title, statistics }) => (
  <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <StatisticsList statistics={statistics} />
  </section>
);

StatisticsSection.defaultProps = {
  title: '',
};

StatisticsSection.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatisticsSection;
