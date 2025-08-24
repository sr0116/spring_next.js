"use client";
import { useEffect, useState } from "react";
import { getEnrollsByOpen } from "@/app/lib/api";

export default function EnrollList({ openId }) {
  const [enrolls, setEnrolls] = useState([]);

  useEffect(() => {
    if (!openId) return;
    getEnrollsByOpen(openId)
        .then(setEnrolls)
        .catch(console.error);
  }, [openId]);

  return (
      <ul>
        {enrolls.map((enroll) => (
            <li key={enroll.enrollId}>
              수강생 ID: {enroll.memberId}, 파트: {enroll.parts}
            </li>
        ))}
      </ul>
  );
}
