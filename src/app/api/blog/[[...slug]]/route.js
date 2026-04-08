import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = await params; // 'slug' sẽ là một mảng hoặc undefined nếu không có segment nào

  if (slug) {
    return NextResponse.json({
      message: `Bạn đang xem bài viết tại đường dẫn: /blog/${slug.join('/')}`,
      pathSegments: slug,
    });
  } else {
    return NextResponse.json({
      message: 'Bạn đang xem trang blog chính (không có segment nào sau /blog)',
      pathSegments: [],
    });
  }
}