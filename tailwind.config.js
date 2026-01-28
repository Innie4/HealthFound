/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#15A147",
                "primary-alt": "#2beead",
                "background-light": "#f6f8f6",
                "background-dark": "#112116",
                "talent": "#B3D684",
                "career-convo": "#B3D684",
                "startup-weekly": "#639041",
                "workplace-corner": "#15A147",
            },
            fontFamily: {
                "display": ["Manrope", "sans-serif"],
                "sans": ["Manrope", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
