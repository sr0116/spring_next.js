"use client";
import { useEffect, useState } from "react";
import { getEnrollsByOpen } from "@/app/lib/api";

export default function EnrollList({ openId }) {
  const [enrolls, setEnrolls] = useState([]);

  useEffect(() => {
    if (!openId) return;
    getEnrollsByOpen(openId).then(setEnrolls).catch(console.error);
  }, [openId]);

  if (enrolls.length === 0) return <p>아직 신청자가 없습니다.</p>;

  return (
    <ul className="space-y-2">
      {enrolls.map((enroll) => (
        <li key={enroll.enrollId} className="p-3 border rounded">
          수강생 ID: {enroll.memberId}, 파트: {enroll.parts}
        </li>
      ))}
    </ul>
  );
}
