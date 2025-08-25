// components/Footer.js
export default function Footer() {
  return (
      <footer className="bg-gray-200 text-sm text-gray-600 mt-auto py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h6 className="font-semibold text-gray-800">클래니티 정보</h6>
            <ul className="space-y-1 mt-2">
              <li><a href="#" className="hover:underline">공지사항</a></li>
              <li><a href="#" className="hover:underline">이벤트</a></li>
              <li><a href="#" className="hover:underline">자주 묻는 질문</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-gray-800">소셜 미디어</h6>
            <ul className="space-y-1 mt-2">
              <li><a href="https://instagram.com" className="hover:underline">인스타그램</a></li>
              <li><a href="https://naver.com" className="hover:underline">네이버 블로그</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-gray-800">주식회사 클래니티</h6>
            <p className="mt-2">대표: 다모아 | 사업자등록번호: 000-00-00000</p>
            <p>이메일: clanity@clanity.kr | 대표번호: 000-0000-0000</p>
          </div>
        </div>
      </footer>
  );
}
