module.exports = {
  mode: "jit",
  content: [
    "./src/admin/*.{vue,html,md,jsx,js,pug}",
    "./src/components/*.{vue,html,md,jsx,js,pug}",
    "./src/layouts/*.{vue,html,md,jsx,js,pug}",
    "./src/pages/*.{vue,html,md,jsx,js,pug}",
    "./src/templates/*.{vue,html,md,jsx,js,pug}",
  ],
  whitelist: [
    "body",
    "html",
    "img",
    "a",
    "g-image",
    "g-image--lazy",
    "g-image--loaded",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
