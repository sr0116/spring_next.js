import ClassDetail from "@/app/components/ClassDetail";

export default function ClassDetailPage({ params }) {
  const classId = Number(params.id);
  return (
    <div className="p-6">
      <ClassDetail classId={classId} />
    </div>
  );
}
