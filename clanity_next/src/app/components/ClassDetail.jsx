import ClassDetailView from "@/components/ClassDetailView";

export default async function ClassDetail({ params }) {
  const { classId } = params;

  // 백엔드에서 클래스 상세 정보 가져오기
  const res = await fetch(`http://localhost:8080/api/classes/${classId}`, { cache: "no-store" });
  const detail = await res.json();

  return (
      <div className="container mx-auto py-6">
        <ClassDetailView detail={detail} />
      </div>
  );
}
