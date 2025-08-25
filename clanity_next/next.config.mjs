/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",              // Next.js에서 호출할 주소
        destination: "http://localhost:8080/api/:path*", // 실제 Spring API
      },
    ];
  },
};

export default nextConfig;
