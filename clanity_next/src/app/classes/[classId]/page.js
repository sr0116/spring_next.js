import ClassDetailView from "@/app/components/ClassDetailView";


export default async function ClassDetail({ params }) {
  const { classId } = params;

  const res = await fetch(`http://localhost:8080/api/classes/${classId}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("클래스 정보를 불러올 수 없습니다.");
  const detail = await res.json();

  return (
      <div className="container mx-auto py-6">
        <ClassDetailView detail={detail} />
      </div>
  );
}
