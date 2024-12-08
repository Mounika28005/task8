
const debound = () => {
  const [query, setQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query) return;
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [query]); 
  useEffect(() => {
    const fetchData = async () => {
      if (!debouncedQuery) return; 

      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${debouncedQuery}`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setResults(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [debouncedQuery]); 
  return (
    <div>
      <h1>Debounced Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Search..."
      />
      
      {loading && <p>Loading...</p>}

      {results.length > 0 && (
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )}
      
      {results.length === 0 && !loading && debouncedQuery && (
        <p>No results found for "{debouncedQuery}"</p>
      )}
    </div>
  );
};

export default debound;
