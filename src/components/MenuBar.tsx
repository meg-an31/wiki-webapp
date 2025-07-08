import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuBar.module.css';

const MenuBar: React.FC = () => (
  <nav className={styles.menuBar}>
    <Link className={styles.menuLink} to="/">Home</Link>
    <Link className={styles.menuLink} to="/about">About</Link>
  </nav>
);

export default MenuBar; 