const Design = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">

      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-gray-600">{description}</p>
        
        <button
          onClick={onButtonClick}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const App = () => {
  const handleButtonClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div className="flex justify-center gap-4 p-8">
      <Card
        image="https://th.bing.com/th?id=OIP.rDRO4mn1GpkocD8xrYeSPwHaL2&w=197&h=316&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        title="Card Title 1"
        description="This is a description for the first card. It can be anything you like."
        buttonText="Learn More"
        onButtonClick={handleButtonClick}
      />
      <Card
        image="https://th.bing.com/th?id=OIP.yP1-2SVw2lifKE2N33ybjAHaJl&w=219&h=284&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        title="Card Title 2"
        description="This is a description for the second card. It can be anything you like."
        buttonText="Learn More"
        onButtonClick={handleButtonClick}
      />
      <Card
        image="https://th.bing.com/th?id=OIP.rFvaFPTvHCxIYDVlFFf9IQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
        title="Card Title 3"
        description="This is a description for the third card. It can be anything you like."
        buttonText="Learn More"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
};

export default Design;
