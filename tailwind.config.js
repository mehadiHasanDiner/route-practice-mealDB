/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2563eb",

          secondary: "#9333ea",

          accent: "#1fb2a6",

          neutral: "#2a323c",

          "base-100": "#374151",

          info: "#06b6d4",

          success: "#22c55e",

          warning: "#f59e0b",

          error: "#dc2626",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
