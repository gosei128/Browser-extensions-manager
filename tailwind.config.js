/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
    ],
    theme: {
        extend: {
            fontFamily: {
                'noto' : ['NotoSans', 'sans-serif'],
            }
        },
    },
    plugins: [],
}

