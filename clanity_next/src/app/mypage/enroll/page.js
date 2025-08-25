// app/mypage/enroll/page.js
import ClassCard from "@/components/ClassCard";

export default async function MyEnrollList() {
  const res = await fetch("http://localhost:8080/api/my/enrolls", { cache: "no-store" });
  const myEnrolls = await res.json();

  return (
      <div>
        <h2 className="text-xl font-bold mb-4">📌 내가 신청한 클래스</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {myEnrolls.map((c) => <ClassCard key={c.openId} c={c} />)}
        </div>
      </div>
  );
}


