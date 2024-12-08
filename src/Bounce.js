const BounceExample = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="animate-bounce bg-blue-500 p-10 rounded-full text-white">
        Bounce!
      </div>
    </div>
  );
};

const FadeInExample = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className={`transition-opacity duration-1000 ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        } bg-green-500 p-10 rounded-lg text-white`}
      >
        Fade In!
      </div>
    </div>
  );
};

const FadeInCustomExample = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div
        className={`${
          visible ? 'animate-fadeIn' : 'opacity-0'
        } bg-red-500 p-10 rounded-lg text-white`}
      >
        Custom Fade In!
      </div>
    </div>
  );
};

const Bounce = () => {
  return (
    <div className="space-y-8">
      <BounceExample />
      <FadeInExample />
      <FadeInCustomExample />
    </div>
  );
};

export default Bounce;

