# Bareminimum ReactJS using Bun + Vite

![homepage](./homepage.png)

**Bareminimum ReactJS** adalah boilerplate minimalis untuk memulai pengembangan aplikasi web menggunakan ReactJS dengan konfigurasi modern dan efisien.

---

**Bareminimum ReactJS** is a minimal boilerplate to kickstart web application development using ReactJS with modern and efficient configurations.

---

**Bareminimum ReactJS**는 ReactJS를 사용하여 현대적이고 효율적인 설정으로 웹 애플리케이션 개발을 시작하기 위한 최소한의 보일러플레이트입니다.

---

## 🛠️ Teknologi yang Digunakan | Tech Stack | 사용된 기술

- **ReactJS**: Library untuk membangun antarmuka pengguna yang dinamis.  
  A library for building dynamic user interfaces.  
  동적인 사용자 인터페이스를 구축하기 위한 라이브러리.  
  [ReactJS Documentation](https://reactjs.org/)

- **TypeScript**: Menambahkan tipe statis untuk JavaScript agar lebih aman dan terstruktur.  
  Adds static typing to JavaScript for better safety and structure.  
  JavaScript에 정적 타이핑을 추가하여 더 안전하고 구조적으로 만듭니다.  
  [TypeScript Documentation](https://www.typescriptlang.org/)

- **TanStack Router**: Router modern untuk aplikasi React yang mendukung data-fetching, nested routing, dan fitur-fitur canggih lainnya.  
  A modern router for React applications that supports data-fetching, nested routing, and other advanced features.  
  React 애플리케이션을 위한 현대적인 라우터로, 데이터 가져오기, 중첩 라우팅 및 기타 고급 기능을 지원합니다.  
  [TanStack Router Documentation](https://tanstack.com/router)

- **Tailwind CSS**: Framework CSS utilitas pertama yang memungkinkan Anda membangun desain yang sepenuhnya custom tanpa harus keluar dari HTML Anda.  
  A utility-first CSS framework that allows you to build fully custom designs without leaving your HTML.  
  유틸리티 우선 CSS 프레임워크로, HTML을 벗어나지 않고 완전히 사용자 정의된 디자인을 구축할 수 있습니다.  
  [Tailwind CSS Documentation](https://tailwindcss.com/)

- **shadcn/ui**: Koleksi komponen UI yang dibangun di atas Tailwind CSS, dirancang untuk memberikan fleksibilitas dan kemudahan dalam membangun antarmuka pengguna yang modern.  
  A collection of UI components built on top of Tailwind CSS, designed to provide flexibility and ease in building modern user interfaces.  
  Tailwind CSS를 기반으로 구축된 UI 구성 요소 모음으로, 현대적인 사용자 인터페이스를 쉽게 구축할 수 있도록 설계되었습니다.  
  [shadcn/ui Documentation](https://ui.shadcn.com/)

- **ESLint**: Menjaga kualitas kode dengan linting otomatis.  
  Maintains code quality with automatic linting.  
  자동 린팅으로 코드 품질을 유지합니다.  
  [ESLint Documentation](https://eslint.org/)

- **Vitest**: Framework untuk pengujian unit dan integrasi.  
  A framework for unit and integration testing.  
  단위 및 통합 테스트를 위한 프레임워크.  
  [Vitest Documentation](https://vitest.dev/)

- **Bun**: Runtime modern untuk JavaScript yang cepat dan ringan.  
  A modern runtime for JavaScript that is fast and lightweight.  
  빠르고 가벼운 JavaScript의 현대적인 런타임.  
  [Bun Documentation](https://bun.sh/)

- **Husky**: Alat untuk mengelola Git hooks dengan mudah, memungkinkan Anda menjalankan skrip otomatis seperti linting atau pengujian sebelum commit atau push.  
  A tool to manage Git hooks easily, allowing you to run automated scripts like linting or testing before committing or pushing.  
  Git 훅을 쉽게 관리할 수 있는 도구로, 커밋이나 푸시 전에 린팅 또는 테스트와 같은 자동 스크립트를 실행할 수 있습니다.  
  [Husky Documentation](https://typicode.github.io/husky/)

- **Commitlint**: Memastikan pesan commit Anda sesuai dengan konvensi tertentu, membantu menjaga konsistensi dan keterbacaan dalam riwayat Git.  
  Ensures your commit messages follow a specific convention, helping maintain consistency and readability in Git history.  
  커밋 메시지가 특정 규칙을 따르도록 보장하여 Git 기록의 일관성과 가독성을 유지합니다.  
  [Commitlint Documentation](https://commitlint.js.org/)

- **Release It**: Alat otomatisasi untuk merilis proyek Anda, termasuk pembaruan versi, pembuatan tag Git, dan publikasi ke npm atau platform lain.  
  An automation tool for releasing your project, including version updates, Git tagging, and publishing to npm or other platforms.  
  프로젝트 릴리스를 자동화하는 도구로, 버전 업데이트, Git 태그 생성, npm 또는 기타 플랫폼에 게시를 포함합니다.  
  [Release It Documentation](https://github.com/release-it/release-it)

---

### Struktur | Structure | 구조

```bash
.
├── __test__
│   └── dummy.test.ts
├── public
│   ├── favicon.ico
│   ├── logo.svg
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── components
│   │   ├── layout
│   │   ├── misc
│   │   └── ui
│   ├── lib
│   │   └── utils.ts
│   ├── routes
│   │   ├── __root.tsx
│   │   ├── about.tsx
│   │   └── index.tsx
│   ├── styles
│   │   ├── app.css
│   │   └── waves.css
│   ├── main.tsx
│   ├── reportWebVitals.ts
│   └── routeTree.gen.ts
├── CHANGELOG.md
├── README.md
├── commitlint.config.js
├── components.json
├── eslint.config.ts
├── homepage.png
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

---

## 🚀 Cara Memulai | Getting Started | 시작하는 방법

### Indonesia

1. Clone repository ini:

```bash
git clone https://github.com/your-username/bareminimum-reactjs.git
cd bareminimum-reactjs
```

2. Install dependencies:

```bash
bun install
```

3. Jalankan aplikasi:

```bash
bun run dev
```

4. Buka browser dan akses `http://localhost:2700`.

---

### English

1. Clone this repository:

```bash
git clone https://github.com/your-username/bareminimum-reactjs.git
cd bareminimum-reactjs
```

2. Install dependencies:

```bash
bun install
```

3. Run the application:

```bash
bun run dev
```

4. Open your browser and navigate to `http://localhost:2700`.

---

### 한국어

1. 이 저장소를 클론합니다:

```bash
git clone https://github.com/your-username/bareminimum-reactjs.git
cd bareminimum-reactjs
```

2. 의존성을 설치합니다:

```bash
bun install
```

3. 애플리케이션을 실행합니다:

```bash
bun run dev
```

---

### 🧪 Pengujian | Testing | 테스트

```bash
bun run test
```

---

### 🤝 Kontribusi | Contributing | 기여

> Kontribusi sangat diterima! Silakan fork repository ini dan ajukan pull request.

> Contributions are welcome! Feel free to fork this repository and submit a pull request.

> 기여는 언제나 환영입니다! 이 저장소를 포크하고 풀 리퀘스트를 제출하세요.

---

Selamat ngoding! 🚀 | Happy coding! 🚀 | 즐거운 코딩 되세요! 🚀
