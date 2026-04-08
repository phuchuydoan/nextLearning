import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = await params; // 'slug' sẽ là một mảng chứa tất cả các segment sau /docs/

  return NextResponse.json({
    message: `Bạn đang xem tài liệu tại đường dẫn: /docs/${slug.join('/')}`,
    pathSegments: slug,
  });
}