"use client" //quan trong

import styles from './dashboard-error.module.css'

export default function DashboardError({ error, reset }) {
  return (
    <div className={styles['error-container']}>
        <h2>Something went wrong</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()} className={styles['retry-button']}>
          Try again
        </button>
    </div>
  )
}