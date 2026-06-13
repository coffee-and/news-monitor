# Tech Radar

> Guardian Open Platform API를 활용한 React·TypeScript 기반 기술 뉴스 모니터링 웹앱입니다.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Tech_Radar-6C63FF?style=for-the-badge)](https://coffee-and.github.io/news-monitor/)

## 프로젝트 소개

**Tech Radar**는 AI, 개발, 산업 관련 뉴스를 키워드로 검색하고 관심 기사를 관리할 수 있도록 만든 뉴스 모니터링 웹앱입니다.

외부 API 요청, 검색 상태, 북마크와 최근 본 기사 상태를 각각 분리해 관리했습니다. 사용자가 기사를 탐색하는 과정에서 필요한 로딩·오류·빈 결과 상태도 함께 처리했습니다.

## 주요 기능

- Guardian Open Platform API 연동
- 기본 키워드 기반 최신 뉴스 조회
- 사용자가 입력한 키워드로 기사 검색
- 카테고리 선택을 통한 검색어 변경
- 기사 제목, 발행일, 요약과 썸네일 표시
- 북마크 추가·해제 및 별도 목록 조회
- 최근 본 기사 저장 및 최신 순 정렬
- LocalStorage 기반 사용자 데이터 유지
- 로딩, 오류 및 검색 결과 없음 상태 처리
- 모바일·데스크톱 반응형 UI
- GitHub Pages 배포

## 구현 포인트

### 1. API 요청 로직 분리

Guardian API 호출 코드를 별도 모듈로 분리했습니다. 검색어를 URL에 안전하게 전달하기 위해 `encodeURIComponent`를 사용하고, 화면에 필요한 썸네일과 요약 필드를 함께 요청합니다.

### 2. Custom Hook 기반 상태 관리

뉴스 조회, 북마크, 최근 본 기사 기능을 각각 Custom Hook으로 분리했습니다. API 데이터와 브라우저 저장 데이터가 서로 다른 책임을 갖도록 구성해 화면 컴포넌트의 복잡도를 줄였습니다.

### 3. LocalStorage 데이터 유지

북마크와 최근 본 기사 목록을 LocalStorage에 저장해 새로고침 이후에도 유지되도록 구현했습니다. 최근 본 기사는 중복 항목을 제거하고 최신 확인 순서가 반영되도록 관리합니다.

### 4. 사용자 상태별 UI

API 호출 중에는 로딩 상태를, 요청 실패 시에는 오류 메시지를 표시합니다. 검색 결과, 북마크, 최근 본 기사 화면을 전환해 사용자가 현재 보고 있는 목록을 명확하게 구분할 수 있도록 했습니다.

### 5. UI 일관성

색상, radius, shadow 값을 CSS 변수로 관리해 카드와 버튼에 일관된 시각 규칙을 적용했습니다. 화면 크기에 따라 검색 영역과 뉴스 카드 배치가 자연스럽게 변경되도록 반응형 스타일을 구성했습니다.

## 기술 스택

| 구분       | 기술                       |
| ---------- | -------------------------- |
| Frontend   | React, TypeScript          |
| Build      | Vite, TypeScript Compiler  |
| API        | Guardian Open Platform API |
| Storage    | LocalStorage               |
| Styling    | CSS, Design Tokens         |
| Deployment | GitHub Pages               |
| Quality    | ESLint                     |

## 프로젝트 구조

```text
src/
├── api/
│   └── guardianApi.ts
├── components/
├── hooks/
│   ├── useBookmarks.ts
│   ├── useNews.ts
│   └── useRecentlyViewed.ts
├── layouts/
├── styles/
├── types/
├── utils/
├── App.tsx
└── main.tsx
```

## 시작하기

### 1. 저장소 복제

```bash
git clone https://github.com/coffee-and/news-monitor.git
cd news-monitor
npm install
```

### 2. Guardian API 키 발급

[Guardian Open Platform](https://open-platform.theguardian.com/)에서 API 키를 발급합니다.

### 3. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 만들고 발급받은 키를 입력합니다.

```env
VITE_GUARDIAN_API_KEY=your_api_key
```

> Vite에서 브라우저 코드로 전달되는 환경 변수는 `VITE_` 접두사가 필요. 공개 저장소에 실제 API 키를 커밋하지 않도록 주의

### 4. 개발 서버 실행

```bash
npm run dev
```

프로덕션 빌드는 다음 명령어로 확인할 수 있습니다.

```bash
npm run build
npm run preview
```

## 배포

```bash
npm run deploy
```

`predeploy` 스크립트가 프로덕션 빌드를 실행한 뒤 `dist` 디렉터리를 GitHub Pages에 배포합니다.

## 링크

- [Live Demo](https://coffee-and.github.io/news-monitor/)
- [GitHub Repository](https://github.com/coffee-and/news-monitor)
- [Guardian Open Platform](https://open-platform.theguardian.com/)
