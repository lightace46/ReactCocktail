import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import ListCocktail from "./ListCocktail";
import RandomCocktail from "./RandomCockctail";

function App() {
  return (
    <>
      <Header />
      <h1>Cocktail</h1>
      <ListCocktail />
      <RandomCocktail />
      <Footer />
    </>
  );
}

export default App;
