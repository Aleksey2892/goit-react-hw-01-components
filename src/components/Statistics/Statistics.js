import React from 'react';

const Statistics = ({ label, percentage }) => (
  <>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}%</span>
  </>
);

export default Statistics;
