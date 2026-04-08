import Link from "next/link";
// import { posts } from "../page";
import styles from "./blog-detail.module.css";
import BlogIdDisplay from "./BlogIdDisplay";

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  // if (!res.ok) {
  //   throw new Error("Fail to fetch data");
  // }

  const posts = await res.json();

  console.log('postspostsposts', posts)

  return posts.map((post) => ({
    blogId: String(post.id),
  }));
}

export const dynamicParams = true; //mac dinh

export default async function BlogDetail({ params }) {
  const { blogId } = await params;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${blogId}`,
  );

  const post = await res.json();

  return (
    <div className={styles.container}>
      {post ? (
        <>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.content}>{post.body}</p>
          <BlogIdDisplay />
        </>
      ) : (
        <h1>Không tìm thấy bài viết</h1>
      )}
      <Link className={styles.backButton} href="/blog">
        Quay lai
      </Link>
    </div>
  );
}
