import React from 'react';
import PropTypes from 'prop-types';

import s from './Styles.module.scss';

const TransactionHistory = ({ transactions }) => (
  <table className={s.transactionHistory}>
    <thead className={s.trTitle}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    {transactions.map(({ id, type, amount, currency }) => (
      <tbody className={s.lineTable} key={id}>
        <tr>
          <td className={s.item}>{type}</td>
          <td className={s.item}>{amount}</td>
          <td className={s.item}>{currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TransactionHistory;
