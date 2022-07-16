module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        zIndex:{
          "z-1":'-1'
        },
        backgroundColor:{
          "main-dark-bg":"rgba(32,32,32,0.8)",
          "transparent":"rgba(0,0,0,0)",
          "transparent-2":"rgba(0,0,0,0.5)"
        },
        backgroundImage:{
          'about-img':"url(https://images.unsplash.com/photo-1600695268275-1a6468700bd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fHdlYiUyMGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)"
        },
        dropShadow: {
          'white':"0 10px 20px rgba(230,230,230,0.2)",
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