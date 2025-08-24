import ClassDetail from "@/app/components/ClassDetail";

export default function ClassDetailPage({ params }) {
  const { id } = params;

  return (
      <div>
        <ClassDetail id={id} />
      </div>
  );
}
