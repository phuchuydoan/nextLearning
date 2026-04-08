export const dynamic = "force-dynamic";

import Link from "next/link";
import { clearTimeStamp } from "./action";

async function fetchData() {
  console.log("Fetching data,...");

  const res = await fetch(`${process.env.API_BASE_URL}/api/timestamp`, {
    cache: "force-cache",
    next: {
      // revalidate: 60
      tags: ["timestamp"],
    },
  });

  return res.json();
}

const CachedData = async () => {
  const data = await fetchData();

  return (
    <div>
      <h1>Request Memoization</h1>
      <p>Timestamp 1: {data.timestamp}</p>
      <Link href="/cached-data-2">GO to page cached data 2</Link>
      <form action={clearTimeStamp}>
        <button>Xoa cache timestamp</button>
      </form>
    </div>
  );
};

export default CachedData;
