
const userdetails = ({ userId }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  useEffect(() => {
    if (!userId) return;
    const fetchUserData = async () => {
      setLoading(true); 
      setError(null); 

      try {
        const response = await fetch(`"C:\Users\gorra\Downloads\img3.jpg"${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data); 
      } catch (error) {
        setError(error.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchUserData(); 
  }, [userId]);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {user && (
        <>
          <h1>{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </>
      )}
    </div>
  );
};

export default userdetails;
