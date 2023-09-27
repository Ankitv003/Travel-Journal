import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Data from "./data.jsx";
const App = () => {
  const cardData = Data.map((cardItem) => {
    return <Card key={cardItem.key} cardItem={cardItem} />;
  });

  return (
    <div>
      <Navbar />
      {cardData}
    </div>
  );
};

export default App;
