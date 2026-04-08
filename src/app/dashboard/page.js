import Link from 'next/link'
import styles from './dashboard.module.css'

export default function DashboardPage () {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Dashboard</h1>
      <p>Welcome to your dashboard</p>
    </div>
  )
}