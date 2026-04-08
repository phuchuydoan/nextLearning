import { NextResponse } from 'next/server';

// Hàm GET xử lý yêu cầu HTTP GET để thực hiện chuyển hướng
export async function GET() {
  // URL mà bạn muốn chuyển hướng đến
  const redirectUrl = 'https://nextjs.org/docs';

  // Thực hiện chuyển hướng bằng NextResponse.redirect()
  // Mã trạng thái 307 Temporary Redirect (Chuyển hướng tạm thời) được sử dụng theo mặc định
  return NextResponse.redirect(redirectUrl);
}