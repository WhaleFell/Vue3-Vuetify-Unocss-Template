# vue3-vuetify-unocss-tamplate

This tamplate skeleton is a Vue 3 project with Vuetify and UnoCSS.

## Initialize Project

```sh
pnpm create vue@latest
pnpm install
# Add prettier and unocss
pnpm add -D prettier unocss @unocss/preset-icons @iconify-json/mdi
# add vuetify
pnpm add vuetify
pnpm add -D vite-plugin-vuetify
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```
