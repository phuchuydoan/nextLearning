export function middleware(request) {
  const token = request.cookies.get("accessToken")?.value;

  if (token) {
    const loginUrl = new URL("/(auth)/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
  return NextResponse.next();
}
