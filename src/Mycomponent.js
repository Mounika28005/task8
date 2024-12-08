

const MyComponent = ({ propValue }) => {
  const [stateValue, setStateValue] = useState('Initial state');
  useEffect(() => {
    console.log('propValue or stateValue has changed.');
  }, [propValue, stateValue]);

  const handleClick = () => {
    setStateValue('Updated state');
  };

  return (
    <div>
      <h1>Prop Value: {propValue}</h1>
      <h2>State Value: {stateValue}</h2>
      <button onClick={handleClick}>Update State</button>
    </div>
  );
};

export default MyComponent;
