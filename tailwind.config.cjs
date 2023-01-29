/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "zoom-blue": "#0b5cff",
            },
            fontFamily: {
                sans: ["Open Sans"],
            },
        },
    },
    plugins: [],
};
