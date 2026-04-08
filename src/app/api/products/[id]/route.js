import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { id } = await params; // Lấy giá trị 'id' từ dynamic segment

  return NextResponse.json({
    message: `Bạn đang xem sản phẩm có ID: ${id}`,
    productId: id,
  });
}