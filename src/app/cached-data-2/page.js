export const dynamic = "force-dynamic";

import Link from "next/link";

async function fetchData() {
  console.log("Fetching data,...");

  const res = await fetch(`${process.env.API_BASE_URL}/api/timestamp`, {
    cache: "force-cache",
  });

  return res.json();
}

const CachedData2 = async () => {
  const data = await fetchData();

  return (
    <div>
      <h1>Request Memoization</h1>
      <p>Timestamp 1: {data.timestamp}</p>
      <Link href="/cached-data">GO to page cached data</Link>
    </div>
  );
};

export default CachedData2;
