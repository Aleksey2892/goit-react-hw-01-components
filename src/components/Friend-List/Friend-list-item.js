import React from 'react';
import styles from './Styles.module.scss';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li key={id} className={styles.item}>
    <span className={isOnline ? styles.statusOnline : styles.statusOffline}>
      {isOnline}
    </span>
    <img className={styles.avatar} src={avatar} alt={name} width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

export default FriendListItem;
