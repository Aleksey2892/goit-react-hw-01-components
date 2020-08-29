import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.scss';

const TransactionHistory = ({ transactions }) => (
  <table className={styles.transactionHistory}>
    <thead className={styles.trTitle}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    {transactions.map(({ id, type, amount, currency }) => (
      <tbody className={styles.lineTable} key={id}>
        <tr>
          <td className={styles.item}>{type}</td>
          <td className={styles.item}>{amount}</td>
          <td className={styles.item}>{currency}</td>
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
