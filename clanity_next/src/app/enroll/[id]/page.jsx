// app/enroll/[id]/page.jsx
import EnrollList from "@/app/components/EnrollList";
import EnrollButton from "@/app/components/EnrollButon";

export default function EnrollPage({ params }) {
  const { id } = params; // openId

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">클래스 신청 페이지</h1>

      {/* 신청 버튼 */}
      <EnrollButton openId={id} />

      {/* 신청 내역 */}
      <div>
        <h2 className="text-xl font-semibold mt-6 mb-2">신청 내역</h2>
        <EnrollList openId={id} />
      </div>
    </div>
  );
}
