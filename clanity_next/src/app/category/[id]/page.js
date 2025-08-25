// app/category/[id]/page.js

import ClassCard from "@/app/components/ClassCard";

export default async function CategoryPage({ params }) {
  const res = await fetch(`http://localhost:8080/api/categories/${params.id}`, { cache: "no-store" });
  const classes = await res.json();

  return (
      <div>
        <h2 className="text-xl font-bold mb-4">카테고리 {params.id} 클래스</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {classes.map((c) => <ClassCard key={c.openId} c={c} />)}
        </div>
      </div>
  );
}
