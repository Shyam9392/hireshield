/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        danger:  "#EF4444",
        success: "#10B981",
        warning: "#F59E0B",
      }
    }
  },
  plugins: [],
}
