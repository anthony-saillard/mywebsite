/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Colors} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx,vue,scss}",
    ],
    theme: {
        extend: {
            colors: {
                primary: 'rgb(var(--color-primary) / <alpha-value>)',
                header: 'rgb(var(--color-header) / <alpha-value>)',
                positive: 'rgb(var(--color-positive) / <alpha-value>)',
                body1: 'rgb(var(--color-body-1) / <alpha-value>)',
                body2: 'rgb(var(--color-body-2) / <alpha-value>)',
                btnBg: 'rgb(var(--color-btn-bg) / <alpha-value>)',
                btnBgHover: 'rgb(var(--color-btn-bg-hover) / <alpha-value>)',
            },
            fontFamily: {
                'montserrat': ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}