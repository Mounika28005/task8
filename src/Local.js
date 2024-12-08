const Local = () => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem('myValue');
    return savedValue ? JSON.parse(savedValue) : ''; 
  });
  useEffect(() => {
    if (value) {
      localStorage.setItem('myValue', JSON.stringify(value));
    }
  }, [value]); 

  return (
    <div>
      <h1>LocalStorage Sync Example</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} 
        placeholder="Type something..."
      />
      <p>Stored value in localStorage: {value}</p>
    </div>
  );
};

export default Local;
