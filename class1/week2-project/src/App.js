import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./data.js"

function App() {
  const cardData = data.map((item) => {
    return <Card
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            country={item.location}
            title={item.title}
            price={item.price}
          />
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-gallery">
        {cardData}
      </div>
    </div>
  );
}

export default App;
