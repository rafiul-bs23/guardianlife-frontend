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
                "brand-dark": "#0F1115",
                "brand-gray": "#464646",
            },
        },
    },
    plugins: [],
};
