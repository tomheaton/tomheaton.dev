module.exports = {
  // darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myGreen: "#66b193",
        myPurple: "#1b1325",
        myRed: "#ff4d4d",
        myDarkGray: "#212529",
        myGray: "#343a40",
        myBlue: "#3e8497",
      },
    },
  },
  plugins: [],
};
