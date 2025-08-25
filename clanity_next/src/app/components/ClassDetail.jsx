"use client";
import { useEffect, useState } from "react";
import api from "@/app/lib/api";
import Link from "next/link";

export default function ClassDetail({ classId }) {
  const [detail, setDetail] = useState(null);
  const [opens, setOpens] = useState([]);

  useEffect(() => {
    if (!classId) return;

    // 클래스 상세
    api.get(`/classes/${classId}`)
      .then((res) => setDetail(res.data))
      .catch(console.error);

    // 이 클래스의 open 목록 (백엔드에 /api/opens/class/{classId} 같은 엔드포인트가 있어야 함)
    api.get(`/opens/class/${classId}`)
      .then((res) => setOpens(res.data))
      .catch(console.error);
  }, [classId]);

  if (!detail) return <p>로딩중...</p>;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold">{detail.title}</h1>
        <p className="text-gray-600">{detail.description}</p>
        <p className="font-semibold">가격: {detail.price?.toLocaleString()}원</p>
      </header>

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">회차 선택</h2>
        {!opens.length ? (
          <p className="text-gray-500">열린 회차가 없습니다.</p>
        ) : (
          <ul className="grid sm:grid-cols-2 gap-3">
            {opens.map((op) => (
              <li key={op.openId} className="border rounded p-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">
                    {op.scheduleDate} {op.startTime}~{op.endTime}
                  </div>
                  <div className="text-sm text-gray-500">
                    정원 {op.minParticipants}~{op.maxParticipants} / 가격 {op.price?.toLocaleString()}원
                  </div>
                </div>

                {/* 신청 페이지로 이동: openId 사용 */}
                <Link
                  className="px-3 py-2 text-sm rounded bg-indigo-600 text-white hover:bg-indigo-700"
                  href={`/enroll/${op.openId}`}
                >
                  신청하기
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
