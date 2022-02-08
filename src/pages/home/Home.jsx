// Styles
import styles from './Home.module.css';

// components
import { TransactionForm } from './TransactionForm';

export const Home = () => {
  return <div className={styles.container}>
    <div className={styles.content}>Transactionlist</div>
    <div className={styles.sidebar}><TransactionForm /></div>
  </div>;
};
