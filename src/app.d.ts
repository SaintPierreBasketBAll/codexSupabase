/// <reference types="@sveltejs/kit" />

// Allow importing PostCSS files in TS modules
declare module '*.postcss' {
  const content: unknown;
  export default content;
}

