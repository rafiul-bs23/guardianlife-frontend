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
        },
    },
    plugins: [],
};
