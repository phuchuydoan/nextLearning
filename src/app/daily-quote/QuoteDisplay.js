export const dynamic = "force-dynamic";

import { getNewQuote } from "./action";

async function fetchDailyQuote() {
  const res = await fetch(`${process.env.API_BASE_URL}/api/quote`, {
    cache: "force-cache",
    next: {
      tags: ["quote"],
    },
  });

  if (!res.ok) {
    throw new Error("Fail to fetch data");
  }

  return res.json();
}

const QuoteDisplay = async () => {
  const result = await fetchDailyQuote();

  return (
    <div>
      <p>{result.quote}</p>
      <p>{result.generatedAt}</p>
      <form action={getNewQuote}>
        <button>Lấy trích dẫn mới</button>
      </form>
    </div>
  );
};

export default QuoteDisplay;
