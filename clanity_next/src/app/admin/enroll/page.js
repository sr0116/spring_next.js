// app/class/[id]/page.js
"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";
import ClassDetail from "@/components/ClassDetail";

export default function ClassDetailPage() {
  const params = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    api.get(`/classes/${params.id}`)
        .then(res => setDetail(res.data))
        .catch(err => console.error(err));
  }, [params.id]);

  if (!detail) return <p>로딩중...</p>;

  return <ClassDetail data={detail} />;
}
