# Bareminimum ReactJS App for Starter

# How to use

## I. Run app directly (without docker)

1. Clone this repo

```sh
git clone https://github.com/ashymee/bareminimum-reactjs
```

2. Go to `bareminimum-reactjs` folder

```sh
cd bareminimum-reactjs
```

3. Install packages

```sh
pnpm install
```

4. Run development app

```sh
pnpm dev
```

(optional)

5. Build the app

```sh
pnpm build
```

6. Start production app

```sh
pnpm preview
```

## II. Run using docker / podman

1. Build docker image

```sh
# using docker
docker build -t [image_name]:[version]

# using podman
podman build -t [image_name]:[version]

# example
podman build -t rv_docker:latest
```

2. Run docker container

```sh
# using docker
docker run -d --name [container_name] -p [port]:4173 [image_name]:[version]

# using podman
podman run -d --name [container_name] -p [port]:4173 [image_name]:[version]

# example
podman run -d --name rv_docker_container -p 3000:4173 rv_docker:latest
```

3. Go to browser, than access `http://localhost:3000`

## Structures

```sh
┌── CHANGELOG.md
├── Dockerfile
├── index.html
├── package.json
├── postcss.config.js
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Wrapper.tsx
│   │   ├── loaders
│   │   │   └── PageLoader.tsx
│   │   └── pages
│   │       ├── AboutPage.tsx
│   │       └── HomePage.tsx
│   ├── main.tsx
│   ├── router
│   │   └── index.ts
│   ├── styles
│   │   └── global.css
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Includes

- [Husky](https://github.com/typicode/husky)
- [Commit Lint](https://github.com/conventional-changelog/commitlint)
- [Release IT](https://github.com/release-it/release-it)
- [Typescript](https://github.com/Microsoft/TypeScript)
- [TailwindCSS](https://github.com/tailwindlabs/tailwindcss)
- [React Router](https://github.com/remix-run/react-router)
