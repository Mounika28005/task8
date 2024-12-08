import React, { useState, useEffect } from 'react';

const multiEffect = () => {
  // State to store the fetched data and loading state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect for fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // useEffect for updating the document title based on the fetched data
  useEffect(() => {
    if (data && data.length > 0) {
      // Update document title with the number of posts fetched
      document.title = `Fetched ${data.length} posts`;
    }
  }, [data]); // Runs every time `data` changes

  // Show loading text if data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Fetched Data</h1>
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default multiEffect;
