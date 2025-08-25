// components/ClassEnrollForm.js
export default function ClassEnrollForm({ detail }) {
  return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border p-4 rounded bg-white shadow">
          <h3 className="font-bold mb-2">클래스 정보</h3>
          <p>{detail.title}</p>
          <p className="text-sm text-gray-500">{detail.description}</p>
        </div>
        <div className="border p-4 rounded bg-white shadow">
          <h3 className="font-bold mb-2">결제 정보</h3>
          <p>결제 금액: {detail.price.toLocaleString()}원</p>
          <button className="w-full bg-red-600 text-white rounded py-2 mt-3">클래스 신청하기</button>
        </div>
      </div>
  );
}
