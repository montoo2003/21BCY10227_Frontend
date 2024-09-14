module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1e40af', // Custom primary color (blue)
                secondary: '#f97316', // Custom secondary color (orange)
            },
            spacing: {
                '128': '32rem', // Custom spacing size
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Custom font
            },
        },
    },
    plugins: [],
};