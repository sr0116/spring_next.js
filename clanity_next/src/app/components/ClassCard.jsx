import Link from "next/link";

export default function ClassCard({ c }) {
  return (
      <Link
          href={`/classes/${c.classId}`}
          className="block border-2 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
      >
        <div className="relative">
          <img
              src={c.thumbnail || "https://placehold.co/400x200?text=No+Image"}
              alt={c.title}
              className="w-full h-40 object-cover"
          />
          <span className="absolute top-2 left-2 bg-yellow-300 text-xs px-2 py-1 rounded font-bold">
          원데이 클래스
        </span>
        </div>

        <div className="p-3 space-y-1">
          <h3 className="font-semibold line-clamp-2">{c.title}</h3>
          <p className="text-sm text-gray-500">{c.category}</p>
          <p className="font-bold text-red-600">
            {c.price?.toLocaleString()}원
          </p>
        </div>
      </Link>
  );
}
