// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
      <header className="sticky top-0 z-50 bg-white border-b px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-red-600">
          CLANITY
        </Link>
        <nav className="flex gap-4 items-center">
          <Link href="/category/10003" className="text-gray-700">Join Class</Link>
          <Link href="/class/register" className="text-gray-700">클래스 열기</Link>
          <Link href="/mypage/enroll" className="text-gray-700">마이페이지</Link>
        </nav>
      </header>
  );
}
