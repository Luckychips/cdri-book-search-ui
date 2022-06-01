### 프로젝트 구조
```
├── node_modules
├── public
├── src
│   ├── assets                   # 이미지 및 기타 리소스
│   │   ├── icons
│   │   └── index.ts
│   ├── stores                   # 상태관리를 위한 스토어 작
│   ├── components               # 컴포넌트, atomic-design 형태로 작성
│   │   ├── UI
│   │   │   ├── atoms
│   │   │   ├── molecules
│   │   │   ├── organisms
│   │   │   └── templates
│   │   ├── atoms.ts
│   │   ├── molecules.ts
│   │   ├── organisms.ts
│   │   └── templates.ts
│   ├── constpack                # 상수
│   ├── models                   # 타입
│   ├── App.test.tsx             
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── react-app-env.d.ts       # global type 추
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
├── .eslintrc.js
├── .gitignore
├── .prettierrc.js
├── babel.config.js
├── config-overrides.js
├── jest.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```

### 라이브러리
```
emotion - css-in-js 형태의 구현을 위한 오픈소스 라이브러리(요구사항 - styled component)
axios - swr 연동을 위한 라이브러리
recoil - 상태관리를 위한 라이브러리
swr - 서버와의 API 통신을 위한 라이브러리
customize-cra - 웹팩을 오버라이드해서 사용하기 위한 라이브러리
```
