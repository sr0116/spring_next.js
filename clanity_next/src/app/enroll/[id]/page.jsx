"use client";
import EnrollList from "@/app/components/EnrollList";

export default function EnrollPage({ params }) {
  const { id } = params; // openId

  return (
      <div>
        <h1>신청 내역</h1>
        <EnrollList openId={id} />
      </div>
  );
}
