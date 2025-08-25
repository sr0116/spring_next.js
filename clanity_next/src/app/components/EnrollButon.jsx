"use client";
import { useState } from "react";
import { createEnroll } from "@/app/lib/api";

export default function EnrollButton({ openId }) {
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    console.log("신청할 openId:", openId);
    try {
      setLoading(true);
      await createEnroll(openId, 1004, 1); // memberId는 테스트용
      alert("신청이 완료되었습니다!");
    } catch (err) {
      console.error(err);
      alert("신청 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleEnroll}
      disabled={loading}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      {loading ? "신청 중..." : "이 클래스 신청하기"}
    </button>
  );
}
