import Link from "next/link";
import styles from "./dashboard-layout.module.css";

export default function DashboardLayout({ children }) {
  return (
    <section className={styles["dashboard-section"]}>
      <nav className={styles.sidebar}>
        <h3>Dashboard Menu</h3>
        <ul>
          <li>
            <Link href="/dashboard">Overview</Link>
          </li>
          <li>
            <Link href="/dashboard/settings">Settings</Link>
          </li>
          <li>
            <Link href="/dashboard/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}
