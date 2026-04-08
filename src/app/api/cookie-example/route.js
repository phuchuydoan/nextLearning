import { NextResponse } from 'next/server';

// Hàm GET để thiết lập một cookie
export async function GET() {
  const response = NextResponse.json({ message: 'Cookie đã được thiết lập!' });
  response.cookies.set('myCookie', 'HelloNextjs', { path: '/', maxAge: 60 * 60 * 24 }); // Cookie hết hạn sau 1 ngày
  return response;
}

// Hàm DELETE để xóa một cookie
export async function DELETE() {
  const response = NextResponse.json({ message: 'Cookie đã được xóa!' });
  response.cookies.delete('myCookie');
  return response;
}