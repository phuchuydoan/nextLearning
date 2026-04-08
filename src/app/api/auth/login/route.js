import { NextResponse } from "next/server";
import { cookies } from "next/headers";
export async function POST(req) {
  const body = await req.json();
  const { userName, password } = body;

  if (userName !== "admin" || password !== "password") {
    return NextResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }
  const accessToken = "your-access-token";

  const cookieStore = await cookies();
  cookieStore.set("accessToken", accessToken, {
    httpOnly: true, //ngan phia client truy cap cookie
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return NextResponse.json({ accessToken });
}
