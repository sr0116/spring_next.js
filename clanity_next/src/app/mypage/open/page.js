// app/mypage/open/page.js

export default async function MyOpenList() {
  const res = await fetch("http://localhost:8080/api/my/open", { cache: "no-store" });
  const myOpens = await res.json();

  return (
      <div>
        <h2 className="text-xl font-bold mb-4">📌 내가 등록한 클래스</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {myOpens.map((c) => <ClassCard key={c.openId} c={c} />)}
        </div>
      </div>
  );
}