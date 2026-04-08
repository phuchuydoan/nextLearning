import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Letdiv app",
  description: "Học lập trình đảm bảo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header className="header">
          <nav className="nav">
            <Link href="/" className="nav-link">
              Home
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
            <Link href="/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/products" className="nav-link">
              Products
            </Link>
            <Link href="/login" className="nav-link">
              Login
            </Link>
          </nav>
        </header>
        <main className="main-content">{children}</main>
        <footer className="footer">Footer</footer>
      </body>
    </html>
  );
}
