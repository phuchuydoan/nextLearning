export const dynamic = "force-dynamic";

async function fetchData() {
  console.log("Fetching data,...");

  const res = await fetch(`${process.env.API_BASE_URL}/api/timestamp`);

  return res.json();
}

const MemoizationPage = async () => {
  const data1 = await fetchData();
  const data2 = await fetchData();

  return (
    <div>
      <h1>Request Memoization</h1>
      <p>Timestamp 1: {data1.timestamp}</p>
      <p>Timestamp 2: {data2.timestamp}</p>
    </div>
  );
};

export default MemoizationPage;
