
const Web = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState(''); 

  useEffect(() => {
    const socket = new WebSocket('wss://your-websocket-url.com'); 
    socket.onmessage = (event) => {
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
    };
    socket.onopen = () => {
      console.log('WebSocket connection established');
    };
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };


    return () => {
      socket.close(); 
      console.log('WebSocket connection cleaned up');
    };
  }, []); 
  const sendMessage = () => {
    if (newMessage.trim()) {
      const socket = new WebSocket('wss://your-websocket-url.com');
      socket.onopen = () => {
        socket.send(newMessage); 
        setNewMessage(''); 
      };
    }
  };

  return (
    <div>
      <h1>WebSocket Chat</h1>

      <div>
        <h2>Messages:</h2>
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>

      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)} 
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Web;
