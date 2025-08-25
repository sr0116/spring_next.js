// components/ClassRegisterForm.js
"use client";
import { useState } from "react";

export default function ClassRegisterForm() {
  const [step, setStep] = useState(1);

  return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-xl font-bold mb-4">클래스 등록</h2>
        {step === 1 && (
            <div>
              <label className="block mb-2">클래스 제목</label>
              <input className="w-full border p-2 mb-4" placeholder="제목" />
              <button onClick={() => setStep(2)} className="bg-red-600 text-white px-4 py-2 rounded">다음</button>
            </div>
        )}
        {step === 2 && (
            <div>
              <label className="block mb-2">커리큘럼</label>
              <textarea className="w-full border p-2 mb-4" placeholder="커리큘럼 작성" />
              <button onClick={() => setStep(3)} className="bg-red-600 text-white px-4 py-2 rounded">다음</button>
            </div>
        )}
        {/* STEP 3~5 추가 */}
      </div>
  );
}
