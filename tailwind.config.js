module.exports = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'mygreen': '#66b193',
                'mypurple': '#1b1325',
                'myred': '#ff4d4d',
                'mydarkgray': '#212529',
                'mygray': '#343a40',
                'myblue': '#3e8497',
            }
        },
    },
    plugins: [],
};