// import React, { useState, useEffect } from 'react';

// const MyComponent = ({ propValue }) => {
//   const [stateValue, setStateValue] = useState('Initial state');
//   useEffect(() => {
//     console.log('propValue or stateValue has changed.');
//   }, [propValue, stateValue]);
//   const handleClick = () => {
//     setStateValue('Updated state');
//   };

//   return (
//     <div>
//       <h1>Prop Value: {propValue}</h1>
//       <h2>State Value: {stateValue}</h2>
//       <button onClick={handleClick}>Update State</button>
//     </div>
//   );
// };

// export default MyComponent;

// import React, { useEffect } from 'react';

// const myComponent = () => {
  
//   useEffect(() => {
//     console.log('Component has mounted!');
//   }, []);
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// };

// export default myComponent;

// import React, { useState, useEffect } from 'react';
// import mycomponent5 from './mycomponent.5';

// const mycomponent5 = () => {
//   // Define state variables for data, loading, and error
//   const [data, setData] = useState(null); // Holds the fetched data
//   const [loading, setLoading] = useState(true); // Tracks loading state
//   const [error, setError] = useState(null); // Tracks errors, if any

//   // useEffect hook to fetch data when the component mounts
//   useEffect(() => {
//     // The API URL to fetch data from
//     const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

//     // Fetch the data
//     const fetchData = async () => {
//       try {
//         // Set loading state to true before fetching data
//         setLoading(true);
//         // Fetch data from API
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         // Parse the response data as JSON
//         const result = await response.json();
//         // Update the state with the fetched data
//         setData(result);
//       } catch (error) {
//         // Set error state if there's any issue with fetching
//         setError(error.message);
//       } finally {
//         // Set loading state to false after data is fetched
//         setLoading(false);
//       }
//     };

//     // Call the fetchData function to initiate the API request
//     fetchData();
//   }, []); // Empty dependency array ensures the effect runs only once when the component mounts

//   // Display loading, error, or fetched data based on the current state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Fetched Data</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li> // Assuming each item has an 'id' and 'title' property
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default mycomponent5;

// import React, { useState, useEffect } from 'react';

// "C:\Users\gorra\Downloads\img3.jpg"
// import React, { useState, useEffect } from 'react';

// const userdetails = ({ userId }) => {
//   const [user, setUser] = useState(null); // Store user data
//   const [loading, setLoading] = useState(false); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // useEffect to fetch user data whenever `userId` changes
//   useEffect(() => {
//     if (!userId) return; // Skip if no userId is provided

//     // Fetch data when `userId` changes
//     const fetchUserData = async () => {
//       setLoading(true); // Start loading
//       setError(null); // Reset any previous errors

//       try {
//         const response = await fetch(`"C:\Users\gorra\Downloads\img3.jpg"${userId}`);
//         if (!response.ok) {
//           throw new Error('Failed to fetch user data');
//         }
//         const data = await response.json();
//         setUser(data); // Update user data
//       } catch (error) {
//         setError(error.message); // Set error message if fetching fails
//       } finally {
//         setLoading(false); // Set loading to false when done
//       }
//     };

//     fetchUserData(); // Call the fetch function
//   }, [userId]); // This effect depends on `userId` prop

//   // Render loading, error, or user data
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {user && (
//         <>
//           <h1>{user.name}</h1>
//           <p>Email: {user.email}</p>
//           <p>Phone: {user.phone}</p>
//           <p>Website: {user.website}</p>
//         </>
//       )}
//     </div>
//   );
// };

// export default userdetails;
// import React, { useState, useEffect } from 'react';

// const Web = () => {
//   const [messages, setMessages] = useState([]); // State to store incoming messages
//   const [newMessage, setNewMessage] = useState(''); // State for new message input

//   useEffect(() => {
//     // Create WebSocket connection
//     const socket = new WebSocket('wss://your-websocket-url.com'); // Replace with your WebSocket URL

//     // Handle incoming messages
//     socket.onmessage = (event) => {
//       const message = event.data;
//       setMessages((prevMessages) => [...prevMessages, message]); // Append new message to existing messages
//     };

//     // Handle WebSocket open connection
//     socket.onopen = () => {
//       console.log('WebSocket connection established');
//     };

//     // Handle WebSocket errors
//     socket.onerror = (error) => {
//       console.error('WebSocket error:', error);
//     };

//     // Handle WebSocket close connection
//     socket.onclose = () => {
//       console.log('WebSocket connection closed');
//     };

//     // Cleanup WebSocket connection when the component unmounts
//     return () => {
//       socket.close(); // Close the WebSocket connection
//       console.log('WebSocket connection cleaned up');
//     };
//   }, []); // Empty dependency array ensures that the WebSocket connection is set up once when the component mounts

//   // Send a new message via WebSocket
//   const sendMessage = () => {
//     if (newMessage.trim()) {
//       // Create a WebSocket connection (could be reused or cached, depending on the use case)
//       const socket = new WebSocket('wss://your-websocket-url.com');
//       socket.onopen = () => {
//         socket.send(newMessage); // Send the new message
//         setNewMessage(''); // Clear the input field
//       };
//     }
//   };

//   return (
//     <div>
//       <h1>WebSocket Chat</h1>

//       <div>
//         <h2>Messages:</h2>
//         <ul>
//           {messages.map((msg, index) => (
//             <li key={index}>{msg}</li>
//           ))}
//         </ul>
//       </div>

//       <div>
//         <input
//           type="text"
//           value={newMessage}
//           onChange={(e) => setNewMessage(e.target.value)} // Handle input change
//           placeholder="Type a message"
//         />
//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Web;
// iimport React from 'react';
// import './App.css'; // Make sure this imports the global CSS file

// const Taiwand = () => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div className="w-64 bg-blue-500 p-4 text-white">
//         <h2 className="text-2xl font-semibold">Sidebar</h2>
//         <ul className="mt-4">
//           <li className="py-2 hover:bg-blue-600 cursor-pointer">Home</li>
//           <li className="py-2 hover:bg-blue-600 cursor-pointer">About</li>
//           <li className="py-2 hover:bg-blue-600 cursor-pointer">Contact</li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow-md p-4">
//           <h1 className="text-xl font-semibold">Header</h1>
//         </header>

//         {/* Content Area */}
//         <main className="flex-1 p-6">
//           <h2 className="text-2xl font-semibold">Content Area</h2>
//           <p className="mt-4 text-gray-700">
//             This is a simple layout with a sidebar and header using Tailwind CSS in React.
//           </p>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Taiwand;
// import React, { useState } from 'react';
// import './App.css'; // Ensure you're importing the CSS where Tailwind's directives are included

// const Layout = () => {
//   // State to toggle the mobile menu
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="bg-blue-500 p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           {/* Logo */}
//           <div className="text-white text-2xl font-bold">
//             My Logo
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="lg:hidden">
//             <button 
//               className="text-white" 
//               onClick={toggleMenu}
//             >
//               {isMenuOpen ? 'Close' : 'Menu'}
//             </button>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden lg:flex space-x-6">
//             <a href="#home" className="text-white hover:text-blue-300">Home</a>
//             <a href="#about" className="text-white hover:text-blue-300">About</a>
//             <a href="#services" className="text-white hover:text-blue-300">Services</a>
//             <a href="#contact" className="text-white hover:text-blue-300">Contact</a>
//           </div>
//         </div>

//         {/* Mobile Menu (visible on mobile) */}
//         <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-blue-500 p-4`}>
//           <a href="#home" className="block text-white py-2">Home</a>
//           <a href="#about" className="block text-white py-2">About</a>
//           <a href="#services" className="block text-white py-2">Services</a>
//           <a href="#contact" className="block text-white py-2">Contact</a>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <div className="p-6">
//         <h1 className="text-3xl font-bold">Welcome to My Website</h1>
//         <p className="mt-4">This is a simple responsive layout built with Tailwind CSS.</p>
//       </div>
//     </div>
//   );
// };

// export default Layout;

// import React from 'react';

// const Default = () => {
//   return (
//     <div className="flex p-6 space-x-4">
//       {/* Left Column (flex-1 will make it take up more space) */}
//       <div className="flex-1 bg-blue-100 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold">Left Column</h2>
//         <p>This column will take up more space compared to the other column.</p>
//       </div>

//       {/* Right Column (fixed width using w-1/4) */}
//       <div className="w-1/4 bg-gray-200 p-6 rounded-lg shadow-md">
//         <h2 className="text-2xl font-semibold">Right Column</h2>
//         <p>This column takes up less space. It is fixed at 25% of the container width.</p>
//       </div>
//     </div>
//   );
// };

// export default Default;
// import React from 'react';

// const Bigpost = () => {
//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <article className="prose lg:prose-xl">
//         <h1 className="text-4xl font-bold mb-4">How to Style Long-Form Content in Tailwind CSS</h1>
        
//         <p>
//           Long-form content, such as blog posts, requires careful consideration to ensure it's
//           readable and easy to follow. In this article, we will explore how to use Tailwind CSS
//           with the typography plugin to style and improve the readability of your content.
//         </p>

//         <h2>What is Tailwind Typography?</h2>
//         <p>
//           The **Tailwind Typography plugin** provides a set of utility classes for styling
//           long-form content. It applies sensible defaults for fonts, line heights, colors, and
//           spacing, which are commonly needed for readable content.
//         </p>

//         <h3>Why is Typography Important?</h3>
//         <p>
//           Proper typography ensures that your content is not only aesthetically pleasing but also
//           highly readable. For blog posts, articles, or documentation, typography directly impacts
//           how comfortable it is for readers to engage with your content.
//         </p>

//         <blockquote className="border-l-4 pl-4 italic text-gray-600">
//           "Typography is the craft of endowing human language with a durable visual form."
//           <br /> - Robert Bringhurst
//         </blockquote>

//         <p>
//           Tailwind's typography plugin lets you focus on writing while it handles the visual
//           design, allowing you to create clean, readable, and well-structured content.
//         </p>

//         <ul>
//           <li>Consistent line heights</li>
//           <li>Clear separation of headings and paragraphs</li>
//           <li>Adjustable font sizes for better legibility</li>
//         </ul>

//         <h2>Customizing Tailwind Typography</h2>
//         <p>
//           Tailwind's typography plugin allows you to customize the default styles for better
//           readability. You can adjust the font sizes, line heights, colors, and even margins to
//           fit your design needs.
//         </p>

//         <code className="bg-gray-100 p-2 rounded-md">npm install @tailwindcss/typography</code>

//         <p>
//           With Tailwind, you can also use custom typography utilities to fine-tune your content
//           further, adjusting the design and readability to your preferences.
//         </p>
//       </article>
//     </div>
//   );
// };

// export default Bigpost;
// import React, { useState } from 'react';

// const Form = () => {
//   // State to store the form input values and validation errors
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });
  
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Basic validation logic
//     let formIsValid = true;
//     let newErrors = { name: '', email: '' };

//     if (!formData.name) {
//       formIsValid = false;
//       newErrors.name = 'Name is required';
//     }

//     if (!formData.email) {
//       formIsValid = false;
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       formIsValid = false;
//       newErrors.email = 'Email address is invalid';
//     }

//     setErrors(newErrors);

//     if (formIsValid) {
//       // Handle successful form submission here (e.g., make API call)
//       console.log('Form submitted successfully', formData);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//       <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name Field */}
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className={`mt-1 block w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
//             placeholder="Your Name"
//           />
//           {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
//         </div>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className={`mt-1 block w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500`}
//             placeholder="Your Email"
//           />
//           {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;

// import React, { useState } from 'react';

// const Tailwind = ({ isOpen, closeModal, children }) => {
//   return (
//     // Modal Backdrop: It appears when isOpen is true
//     <div 
//       className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
//       onClick={closeModal}
//     >
//       {/* Modal Container */}
//       <div
//         className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg shadow-lg transition-all ${isOpen ? 'scale-100' : 'scale-95 opacity-0'}`}
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
//       >
//         {children}
//         {/* Close Button */}
//         <button
//           onClick={closeModal}
//           className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
//         >
//           &times;
//         </button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="h-screen flex items-center justify-center bg-gray-100">
//       <button
//         onClick={openModal}
//         className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600"
//       >
//         Open Modal
//       </button>

//       <Modal isOpen={isModalOpen} closeModal={closeModal}>
//         <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
//         <p className="mb-4">This is a reusable modal built with Tailwind CSS.</p>
//         <button
//           onClick={closeModal}
//           className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
//         >
//           Close
//         </button>
//       </Modal>
//     </div>
//   );
// };

// export default Tailwind;

// import React, { useState, useEffect } from 'react';

// const Darkmodel = () => {
//   // State to track dark mode toggle
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   // Effect to apply the dark class to <html> or <body> based on the state
//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add('dark'); // Enable dark mode
//     } else {
//       document.documentElement.classList.remove('dark'); // Disable dark mode
//     }
//   }, [isDarkMode]);

//   // Toggle dark mode
//   const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold mb-4">Dark Mode with Tailwind CSS</h1>
//         <p className="mb-8">Toggle between light and dark themes with the button below.</p>

//         {/* Dark Mode Toggle Button */}
//         <button
//           onClick={toggleDarkMode}
//           className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
//         >
//           {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Darkmodel;
// import React from 'react';

// const Design = ({ image, title, description, buttonText, onButtonClick }) => {
//   return (
//     <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
//       {/* Image */}
//       <img src={image} alt={title} className="w-full h-48 object-cover" />
      
//       {/* Card Content */}
//       <div className="p-4">
//         <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
//           {title}
//         </h3>
//         <p className="mt-2 text-gray-600">{description}</p>
        
//         {/* Button */}
//         <button
//           onClick={onButtonClick}
//           className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
//         >
//           {buttonText}
//         </button>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const handleButtonClick = () => {
//     alert("Button Clicked!");
//   };

//   return (
//     <div className="flex justify-center gap-4 p-8">
//       <Card
//         image="https://th.bing.com/th?id=OIP.rDRO4mn1GpkocD8xrYeSPwHaL2&w=197&h=316&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//         title="Card Title 1"
//         description="This is a description for the first card. It can be anything you like."
//         buttonText="Learn More"
//         onButtonClick={handleButtonClick}
//       />
//       <Card
//         image="https://th.bing.com/th?id=OIP.yP1-2SVw2lifKE2N33ybjAHaJl&w=219&h=284&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//         title="Card Title 2"
//         description="This is a description for the second card. It can be anything you like."
//         buttonText="Learn More"
//         onButtonClick={handleButtonClick}
//       />
//       <Card
//         image="https://th.bing.com/th?id=OIP.rFvaFPTvHCxIYDVlFFf9IQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//         title="Card Title 3"
//         description="This is a description for the third card. It can be anything you like."
//         buttonText="Learn More"
//         onButtonClick={handleButtonClick}
//       />
//     </div>
//   );
// };

// export default Design;

// import React, { useState, useEffect } from 'react';

// const BounceExample = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="animate-bounce bg-blue-500 p-10 rounded-full text-white">
//         Bounce!
//       </div>
//     </div>
//   );
// };

// const FadeInExample = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(true);
//     }, 1000); // Fade-in after 1 second
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div
//         className={`transition-opacity duration-1000 ease-out ${
//           visible ? 'opacity-100' : 'opacity-0'
//         } bg-green-500 p-10 rounded-lg text-white`}
//       >
//         Fade In!
//       </div>
//     </div>
//   );
// };

// const FadeInCustomExample = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setVisible(true);
//     }, 500); // Fade-in after 0.5 seconds
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div
//         className={`${
//           visible ? 'animate-fadeIn' : 'opacity-0'
//         } bg-red-500 p-10 rounded-lg text-white`}
//       >
//         Custom Fade In!
//       </div>
//     </div>
//   );
// };

// const Bounce = () => {
//   return (
//     <div className="space-y-8">
//       <BounceExample />
//       <FadeInExample />
//       <FadeInCustomExample />
//     </div>
//   );
// };

// export default Bounce;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// const SearchPage = () => {
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const API_KEY = "your_spoonacular_api_key"; 
//   const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=`;

//   const handleSearch = async () => {
//     setLoading(true);
//     try {
//       const response = await axios.get(`${API_URL}${query}`);
//       setRecipes(response.data.results);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto my-12">
//       <div className="mb-8 text-center">
//         <h1 className="text-3xl font-bold text-gray-800">Recipe Finder</h1>
//         <input
//           type="text"
//           className="mt-4 p-2 w-2/3 rounded-md border border-gray-300"
//           placeholder="Enter ingredients..."
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//         />
//         <button
//           className="ml-4 p-2 bg-blue-500 text-white rounded-md"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>

//       {loading ? (
//         <div className="text-center text-gray-500">Loading...</div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {recipes.map((recipe) => (
//             <div
//               key={recipe.id}
//               className="bg-white rounded-lg shadow-md overflow-hidden"
//             >
//               <img
//                 src={recipe.image}
//                 alt={recipe.title}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h2 className="font-semibold text-lg">{recipe.title}</h2>
//                 <Link
//                   to={`/recipe/${recipe.id}`}
//                   className="text-blue-500 hover:text-blue-700"
//                 >
//                   View Recipe
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const RecipeDetail = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const API_KEY = "your_spoonacular_api_key";
//   const API_URL = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get(API_URL);
//         setRecipe(response.data);
//       } catch (error) {
//         console.error("Error fetching recipe details:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRecipe();
//   }, [id]);

//   if (loading) return <div className="text-center text-gray-500">Loading...</div>;

//   return (
//     <div className="max-w-4xl mx-auto my-12">
//       <div className="bg-white p-6 rounded-lg shadow-md">
//         <img
//           src={recipe.image}
//           alt={recipe.title}
//           className="w-full h-64 object-cover rounded-lg"
//         />
//         <h2 className="text-3xl font-semibold my-4">{recipe.title}</h2>
//         <h3 className="text-xl font-semibold text-gray-700">Ingredients</h3>
//         <ul className="list-disc pl-5">
//           {recipe.extendedIngredients.map((ingredient) => (
//             <li key={ingredient.id}>{ingredient.original}</li>
//           ))}
//         </ul>
//         <h3 className="text-xl font-semibold text-gray-700 mt-4">Instructions</h3>
//         <p>{recipe.instructions}</p>
//         <h3 className="text-xl font-semibold text-gray-700 mt-4">Nutrition Information</h3>
//         <ul>
//           {recipe.nutrition.nutrients.map((nutrient) => (
//             <li key={nutrient.title}>
//               <strong>{nutrient.title}:</strong> {nutrient.amount} {nutrient.unit}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
// const App = () => {
//   return (
//     <Router>
//       <div className="container mx-auto px-4">
//         <Routes>
//           <Route path="/" element={<SearchPage />} />
//           <Route path="/recipe/:id" element={<RecipeDetail />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

// function Page() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default Page;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Home from './Home';
// import About from './About';
// import Contact from './Contact';

// function Task11() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//             <li><Link to="/contact">Contact</Link></li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default Task11;
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Profile from './Profile';
import Settings from './Settings';

function Task12() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Task12;



