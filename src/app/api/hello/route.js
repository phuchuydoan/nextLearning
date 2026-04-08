import { NextResponse } from 'next/server';
import { headers } from 'next/headers';

export async function GET(request) {
  const { searchParams } = request.nextUrl;
  const name = searchParams.get('name') || 'Guest';
  const age = searchParams.get('age') || 'unknown';

  const headersList = await headers();
  const userAgent = headersList.get('user-agent');

  return NextResponse.json({
    message: `Hello, ${name}!`,
    age: age,
    userAgent: userAgent,
  });
}
export async function POST(request) {
  const body = await request.json();
  return NextResponse.json({ receivedBody: body });
}