import EnrollPanel from "@/app/components/EnrollPanel";

export default async function ClassOpenDetail({ params }) {
  const { openId } = params;

  const res = await fetch(`http://localhost:8080/api/class-opens/${openId}`, { cache: "no-store" });
  const detail = await res.json();

  return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        {/* 왼쪽: 클래스 상세 */}
        <div className="lg:col-span-2 space-y-4">
          <img
              src={detail.thumbnail || "https://placehold.co/600x400?text=No+Image"}
              alt={detail.title}
              className="w-full h-96 object-cover rounded"
          />
          <h2 className="text-2xl font-bold">{detail.title}</h2>
          <p className="text-gray-600">{detail.description}</p>

          <div className="mt-4 border-t pt-4">
            <h3 className="font-semibold">📌 커리큘럼</h3>
            <p>{detail.curriculum}</p>
          </div>

          <div className="mt-4 border-t pt-4">
            <h3 className="font-semibold">👩‍🏫 호스트 소개</h3>
            <p>{detail.instructorName}</p>
            <p>{detail.hostIntroduction}</p>
          </div>

          <div className="mt-4 border-t pt-4">
            <h3 className="font-semibold">📍 위치</h3>
            <p>{detail.address}</p>
          </div>
        </div>

        {/* 오른쪽: 신청 패널 */}
        <div className="lg:col-span-1">
          <EnrollPanel detail={detail} />
        </div>
      </div>
  );
}
