"use client";
import { useState } from "react";
import EnrollPanel from "./EnrollPanel";

export default function ClassDetailView({ detail }) {
  const [mainImage, setMainImage] = useState(
      detail.thumbnail || "https://placehold.co/600x400?text=No+Image"
  );

  return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 왼쪽 영역 */}
        <div className="lg:col-span-2 space-y-6">
          {/* 대표 이미지 */}
          <img
              src={mainImage}
              alt={detail.title}
              className="w-full h-[400px] object-cover rounded-lg border"
          />

          {/* 썸네일 목록 */}
          <div className="flex gap-2 overflow-x-auto">
            {detail.images?.map((img, idx) => (
                <img
                    key={idx}
                    src={img}
                    onClick={() => setMainImage(img)}
                    className={`w-24 h-24 object-cover rounded cursor-pointer border ${
                        mainImage === img ? "ring-2 ring-red-500" : ""
                    }`}
                />
            ))}
          </div>

          {/* 제목 + 소개 */}
          <h2 className="text-2xl font-bold">{detail.title}</h2>
          <p className="text-gray-600">{detail.description}</p>

          {/* 상세 탭 비슷하게 섹션 */}
          <section className="border-t pt-4">
            <h3 className="font-semibold mb-2">📌 커리큘럼</h3>
            <p>{detail.curriculum}</p>
          </section>

          <section className="border-t pt-4">
            <h3 className="font-semibold mb-2">👩‍🏫 호스트 소개</h3>
            <p className="font-bold">{detail.instructorName}</p>
            <p>{detail.hostIntroduction}</p>
          </section>

          <section className="border-t pt-4">
            <h3 className="font-semibold mb-2">📍 위치</h3>
            <p>{detail.address}</p>
          </section>
        </div>

        {/* 오른쪽 영역 */}
        <div className="lg:col-span-1">
          <EnrollPanel detail={detail} />
        </div>
      </div>
  );
}
