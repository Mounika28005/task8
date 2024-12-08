/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,jsx,ts,tsx}', 
    ],
    theme: {
      extend: {
        colors: {
          brandBlue: '#1D4ED8', 
          brandOrange: '#FB923C', 
          brandGreen: '#34D399', 
          darkGray: '#333333',
          lightGray: '#F3F4F6',
        },
  
        
        fontFamily: {
          heading: ['Poppins', 'sans-serif'], 
          body: ['Roboto', 'sans-serif'],
        },
  
        spacing: {
          72: '18rem',  
          84: '21rem', 
          96: '24rem',  
        },
  
       
        borderRadius: {
          'xl': '1rem',  
          '2xl': '1.5rem', 
          '3xl': '2rem', 
        },
        boxShadow: {
          'xl': '0 4px 6px rgba(0, 0, 0, 0.1)', 
          '2xl': '0 10px 15px rgba(0, 0, 0, 0.1)', 
          'none': 'none', 
        },
  
        opacity: {
          10: '0.1',
          25: '0.25',
          50: '0.5',
          75: '0.75',
          90: '0.9',
        },
  
        transitionProperty: {
          'width': 'width',
          'height': 'height',
          'spacing': 'margin, padding',
        },
  
       
        screens: {
          'xs': '475px', 
          'sm': '640px', 
          'md': '768px', 
          'lg': '1024px', 
          'xl': '1280px', 
          '2xl': '1536px', 
        },
      },
    },
    plugins: [],
  }
  