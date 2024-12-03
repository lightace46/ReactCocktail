import { useEffect, useState } from "react";

const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  const fetchCokctail = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setRandomCocktail(data.drinks[0]);
      });
  };

  useEffect(() => {
    fetchCokctail();
  }, []);

  const handleClick = () => {
    //setPokemons([]); //bonne réponse aussi
    fetchCokctail();
  };

  if (!randomCocktail) {
    return <p>Cocktails en chargement</p>;
  }

  return (
    <>
      <section>
        <h1>Random cocktail</h1>
        <article>
          <p>{randomCocktail.strDrink}</p>
          <img
            width={"100px"}
            src={randomCocktail.strDrinkThumb}
            alt={randomCocktail.strDrink}
          />
        </article>
      </section>
      <button onClick={handleClick}>Changer de cocktail</button>
    </>
  );
};

export default RandomCocktail;
