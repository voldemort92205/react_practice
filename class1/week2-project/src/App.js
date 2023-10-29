import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-gallery">
        <Card
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={136}
        />
      </div>
    </div>
  );
}

export default App;
