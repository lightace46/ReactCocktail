import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ListCocktail from "./ListCocktail";
import RandomCocktail from "./RandomCockctail";

function App() {
  const userName = "Mehmet Minnet";
  return (
    <>
      <Header userName={userName} />
      <h1>Cocktail</h1>
      <ListCocktail />
      <RandomCocktail />
      <Footer userName={userName} />
    </>
  );
}

export default App;
