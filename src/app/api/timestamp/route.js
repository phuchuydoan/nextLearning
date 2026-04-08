import { NextResponse } from "next/server";


export async function GET() {
  const timestamp = new Date().toISOString();
  console.log('API timestamp called at: ', timestamp)
  return NextResponse.json({
    timestamp
  })
}