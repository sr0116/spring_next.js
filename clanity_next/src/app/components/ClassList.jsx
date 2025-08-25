"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getClasses } from "@/app/lib/api";

export default function ClassList() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    getClasses().then(setClasses).catch(console.error);
  }, []);

  if (classes.length === 0) {
    return <p className="text-gray-500 mt-6">등록된 클래스가 없습니다.</p>;
  }

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {classes.map((c) => (
            <Link key={c.classId} href={`/class/${c.classId}`}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden border hover:shadow-xl transition cursor-pointer">
                {/* 썸네일 */}
                <img
                    src={c.thumbnailImage || "/default-thumbnail.jpg"}
                    alt={c.title}
                    className="w-full h-48 object-cover"
                />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{c.instructorName}</p>
                  <p className="text-red-500 font-bold mt-2">{c.price}원</p>
                </div>
              </div>
            </Link>
        ))}
      </div>
  );
}
