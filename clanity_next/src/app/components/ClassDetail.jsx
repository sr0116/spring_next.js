"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getClassDetail } from "@/app/lib/api";
import Link from "next/link";

export default function ClassDetailPage() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    if (!id) return;
    getClassDetail(id).then(setDetail).catch(console.error);
  }, [id]);

  if (!detail) return <p className="text-gray-500 mt-6">로딩중...</p>;

  return (
      <div className="max-w-3xl mx-auto mt-8 bg-white shadow-lg rounded-xl overflow-hidden border">
        {/* 대표 이미지 */}
        <img
            src={detail.thumbnailImage || "/default-thumbnail.jpg"}
            alt={detail.title}
            className="w-full h-64 object-cover"
        />

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{detail.title}</h1>
          <p className="text-gray-600 mt-2">{detail.description}</p>

          <div className="mt-4 space-y-2">
            <p className="text-lg font-semibold text-red-500">
              가격: {detail.price}원
            </p>
            <p className="text-gray-700">강사: {detail.instructorName}</p>
            <p className="text-gray-500 text-sm">난이도: {detail.difficulty}</p>
            <p className="text-gray-500 text-sm">지역: {detail.region}</p>
          </div>

          {/* 신청 버튼 */}
          <div className="mt-6">
            <Link href={`/enroll/${id}`}>
              <button className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition">
                이 클래스 신청하기
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
}
