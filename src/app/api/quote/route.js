// src/app/api/quote/route.js
import { NextResponse } from 'next/server';

const quotes = [
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Strive not to be a success, but rather to be of value.",
  "The mind is everything. What you think you become.",
  "Your time is limited, so don’t waste it living someone else’s life."
];

export async function GET() {
  // Mô phỏng API bị chậm 2 giây
  await new Promise(resolve => setTimeout(resolve, 2000));

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  const timestamp = new Date().toISOString();

  console.log(`[API] /api/quote called at: ${timestamp}`);

  return NextResponse.json({
    quote: randomQuote,
    generatedAt: timestamp
  });
}