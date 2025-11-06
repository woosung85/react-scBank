## 리액트 SC은행 테스트겸 공부용

Nexts.js + TypeScript 언어 사용

#### UI 라이브러리 [Shadcn](https://ui.shadcn.com/) 사용

#### CSS 라이브러리 https://tailwindcss.com/ 사용

프로젝트 생성 가이드
터미널 명령 순서

1. npx init next-app@latest . -- --typescript --tailwind --eslint --app --src-dir --import-alias "@/\*"

2. shadcn-ui 설치

   - npx shadcn-ui@latest init

3. shadcn 컴포넌트 설치

- npx shadcn@latest add button card dialog form input label select textarea alert dropdown-menu avatar (임시 공통 컴포넌트 설치)
- https://ui.shadcn.com/docs/components 에서 확인후 사용할 공통 컴포넌트 설치

4. 필수X - 스토리북 설치

   - storybook@latest init

5. 1-4번 과정 완료후 터미널 창에서 npm run dev 입력후 로컬주소 복사하여 브라우저에서 확인가능
6. 개별로컬주소입력/components-guide -> 임시 컴포넌트 가이드 페이지

ps. npm으로 설치 안될 경우 npx로 변경 (node버전에 따라서 명령어가 변경)
