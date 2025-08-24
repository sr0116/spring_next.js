✔  ##Spring Boot + Next.js 연동

- Spring Boot API 구성

- ClassController, EnrollController, ClassOpenController 등 REST API 구현

- 주요 기능: 클래스 CRUD, 클래스 오픈(회차) 관리, 신청(Enroll) 등록/조회/취소

- DB 연동: MariaDB + JPA(Entity/DTO 변환 활용)

- Next.js 앱(App Router 방식)

- 컴포넌트 분리: ClassList, ClassDetail, EnrollList 등 UI 컴포넌트 구성

- Axios API 모듈 (lib/api.js)

- baseURL: http://localhost:8080/api (Spring 서버와 연동)

- CORS 설정
- Spring → WebConfig에 @Bean WebMvcConfigurer 등록 (http://localhost:3000 허용)
- Next.js → next.config.mjs에 headers() 추가
-> 클래스 목록 → 상세 → 신청 흐름까지 연동 성공
