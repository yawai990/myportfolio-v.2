module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        backgroundColor:{
          "main-dark-bg":"rgba(32,32,32,0.8)",
          "transparent":"rgba(0,0,0,0.4)"
        },
        backgroundImage:{
          'about-img':"url(https://images.unsplash.com/photo-1514944152559-a103040c7f16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)"
        },
        dropShadow: {
          '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
          '4xl': [
              '0 35px 35px rgba(0, 0, 0, 0.25)',
              '0 45px 65px rgba(0, 0, 0, 0.15)'
          ]
        }
      },
    },
    plugins: [],
  }