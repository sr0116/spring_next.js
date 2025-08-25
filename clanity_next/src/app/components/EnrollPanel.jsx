"use client";
import { useState } from "react";

export default function EnrollPanel({ detail }) {
  const [quantity, setQuantity] = useState(1);

  const totalPrice = detail.price * quantity;

  const handleEnroll = async () => {
    alert("✅ 클래스 신청 완료 (API 연동 필요)");
    // 실제 API POST /api/enrolls 로 연동하면 마이페이지 내역에 들어감
  };

  return (
      <div className="sticky top-20 border rounded-lg p-4 bg-white shadow space-y-4">
        <h4 className="font-bold text-lg">클래스 신청</h4>

        {/* 날짜 */}
        <div>
          <label className="block text-sm font-medium mb-1">날짜</label>
          <input
              type="date"
              defaultValue={detail.scheduleDate}
              className="w-full border rounded px-2 py-1"
          />
        </div>

        {/* 인원 선택 */}
        <div>
          <label className="block text-sm font-medium mb-1">인원 선택</label>
          <div className="flex items-center border rounded">
            <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 border-r"
            >
              -
            </button>
            <span className="flex-1 text-center">{quantity}</span>
            <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 border-l"
            >
              +
            </button>
          </div>
        </div>

        {/* 총 금액 */}
        <div className="text-right font-bold text-red-600">
          {totalPrice.toLocaleString()} 원
        </div>

        <button
            onClick={handleEnroll}
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
        >
          클래스 신청하기
        </button>
      </div>
  );
}
