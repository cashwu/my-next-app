import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "我的個人網站",
  description: "歡迎來到我的個人網站，這裡展示了我的作品集和專業技能。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className={inter.className}>
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              我的網站
            </Link>
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  首頁
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gray-300">
                  作品集
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}