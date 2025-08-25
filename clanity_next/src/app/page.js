import ClassCard from "@/app/components/ClassCard";

export default async function HomePage() {
  const res = await fetch("http://localhost:8080/api/classes", { cache: "no-store" });
  const classes = await res.json();

  // 랜덤으로 10개 추출
  const randomClasses = classes.sort(() => 0.5 - Math.random()).slice(0, 10);

  return (
      <div>
        <h2 className="text-xl font-bold mb-4">🎯 추천 클래스</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {randomClasses.map((c) => (
              <ClassCard key={c.classId} c={c} />
          ))}
        </div>
      </div>
  );
}
