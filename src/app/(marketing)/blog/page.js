import Link from "next/link";
import styles from "./blog.module.css";

export const posts = [
  { id: "post1", title: "Bai viet 1", description: "Day la mo ta cua post 1" },
  { id: "post2", title: "Bai viet 2", description: "Day la mo ta cua post 2" },
];

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Fail to fetch data");
  }

  return res.json();
}

async function fetchUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!res.ok) {
    throw new Error("Fail to fetch data");
  }

  return res.json();
}

export default async function BlogPage() {
  const [posts, users] = await Promise.all([fetchPosts(), fetchUsers()]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Danh sach bai viet blog</h1>
      <section className={styles.sectionUser}>
        <h2>Nguoi dung</h2>
        <ul className={styles.userList}>
          {users.map(user => (
            <li key={user.id} className={styles.userItem}>
              {user.name} ({user.username})
            </li>
          ))}
        </ul>
      </section>

      <section>
        <div className={styles.postList}>
          {posts.map((post) => (
            <div key={post.id} className={styles.postCard}>
              <h2 className={styles.postTitle}>{post.title}</h2>
              <p className={styles.postDescription}>
                {post.body.substring(0, 100)}...
              </p>
              <Link className={styles.postLink} href={`/blog/${post.id}`}>
                Doc them
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
