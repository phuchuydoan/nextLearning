import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    message: 'Đây là phản hồi JSON (cách 1)',
    version: 'LetDiv 1.0',
    date: new Date().toISOString(),
  };

  // Cách 1: truyền trực tiếp headers trong init object
  // return new NextResponse(JSON.stringify(data), {
  //   status: 200,
  //   headers: {
  //     'Content-Type': 'application/json',      // header mặc định JSON
  //     'X-Custom-Header': 'Hello from Next.js API', // custom header
  //     'Cache-Control': 'no-store',             // ví dụ thêm header khác
  //   },
  // });

  // Cách 2: tạo response JSON mặc định
  const response = NextResponse.json(data, { status: 200 });

  // Modify header: thêm hoặc override
  response.headers.set('X-Custom-Header', 'Hello from Next.js API');
  response.headers.set('Cache-Control', 'no-store');

  return response;
}
