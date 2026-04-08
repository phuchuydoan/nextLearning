// import Image from "next/image";
// import styles from "./page.module.css";
// import InteractiveWelcome from "./components/InteractiveWelcome/InteractiveWelcome";
// // import ClientComponent from "./components/ClientComponent/ClientComponent";


// export default async function Home({ searchParams }) {
//   // const nonSerialFunc = () => {
//   //   console.log('this is func defined in server component')
//   //   return "hello from a non serial func"
//   // }

//   const { keyword = "Khong co tu khoa"} = await searchParams;

//   return (
//     <div>
//       <p>Tu khoa tim kiem tu server component: {keyword}</p>
//       <InteractiveWelcome />
//       {/* <ClientComponent nonSerial={nonSerialFunc}/> */}
//     </div>
//   );
// }

import PostsList from "./PostsList";
import StoreProvider from "./StoreProvider";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Fail to fetch data");
  }

  return res.json();
}


export default async function Home() {
  const initialPosts = await fetchPosts();
  
  return (
    <StoreProvider initialPosts={initialPosts}>
      <h1>Welcome to posts app</h1>
      <PostsList initialPosts={initialPosts}/>
    </StoreProvider>
  )
}