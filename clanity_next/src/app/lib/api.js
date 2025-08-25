import axios from "axios";

// 공통 axios 인스턴스
const api = axios.create({
  baseURL: "/api", // 이제 proxy 설정 덕분에 localhost:8080 안 써도 됨
  headers: {
    "Content-Type": "application/json",
  },
});

/* ===============================
   클래스 (ClassInfo)
   =============================== */
export const getClasses = () =>
    api.get("/classes").then((res) => res.data);

export const getClassDetail = (id) =>
    api.get(`/classes/${id}`).then((res) => res.data);

export const createClass = (data) =>
    api.post("/classes", data).then((res) => res.data);

export const updateClass = (id, data) =>
    api.put(`/classes/${id}`, data).then((res) => res.data);

export const deleteClass = (id) =>
    api.delete(`/classes/${id}`).then((res) => res.data);

/* ===============================
   클래스 개설 (ClassOpen)
   =============================== */
export const getOpens = () =>
    api.get("/opens").then((res) => res.data);

export const getOpenDetail = (id) =>
    api.get(`/opens/${id}`).then((res) => res.data);

export const createOpen = (data) =>
    api.post("/opens", data).then((res) => res.data);

export const updateOpen = (id, data) =>
    api.put(`/opens/${id}`, data).then((res) => res.data);

export const deleteOpen = (id) =>
    api.delete(`/opens/${id}`).then((res) => res.data);

/* ===============================
   클래스 신청 (ClassEnroll)
   =============================== */
export const getEnrollsByOpen = (openId) =>
    api.get(`/enrolls?openId=${openId}`).then((res) => res.data);

export const getEnrollDetail = (id) =>
    api.get(`/enrolls/${id}`).then((res) => res.data);

export const createEnroll = (data) =>
    api.post("/enrolls", data).then((res) => res.data);

export const cancelEnroll = (id) =>
    api.patch(`/enrolls/${id}/cancel`).then((res) => res.data);

export const deleteEnroll = (id) =>
    api.delete(`/enrolls/${id}`).then((res) => res.data);
