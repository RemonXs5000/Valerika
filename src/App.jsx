import Banner2 from "./components/Banner2/Banner2";
import Favorites from "./components/Favorites/Favorites";
import Banner from "./components/Hero/Banner";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import NewSeason from "./components/NewSeason/NewSeason";
import NewCollection from "./components/NewCollection/NewCollection";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Banner />
      <NewSeason />
      <Favorites />
      <Banner2 />
      <NewCollection />
    </>
  );
}

export default App;
