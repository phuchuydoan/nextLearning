import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Giả lập một lỗi đơn giản
    throw new Error('Đây là một lỗi được tạo ra có chủ đích!');

    // Đoạn code này sẽ không bao giờ được chạy nếu lỗi xảy ra
    return NextResponse.json({ message: 'Thành công!' });

  } catch (error) {
    // Xử lý lỗi và trả về phản hồi lỗi phù hợp
    console.error('Lỗi trong API đơn giản:', error.message);

    return NextResponse.json({
      message: 'Đã xảy ra lỗi khi xử lý yêu cầu.',
      error: error.message,
      code: 'API_ERROR_001'
    }, { status: 500 }); // Trả về status code 500 (Internal Server Error)
  }
}