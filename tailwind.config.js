/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#F37021",
                secondary: "#F5DBCB",
                "yellow": "#FDB913",
                "brand-dark": "#0F1115",
                "brand-gray": "#464646",
            },
            fontFamily: {
                sans: ["Lato", "sans-serif"],
            },
            screens: {
                'xs': '320px',
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            keyframes: {
                'neon-travel': {
                    '0%': { 'stroke-dashoffset': '1365' }, // Start from the beginning of the path
                    '100%': { 'stroke-dashoffset': '0' },   // Travel full circle
                },
            },
            animation: {
                'neon-loop-fast': 'neon-travel 4s linear infinite',
                'neon-loop-slow': 'neon-travel 6s linear infinite 1s', // A slower loop for one segment
            },
        },
    },
    plugins: [],
};
