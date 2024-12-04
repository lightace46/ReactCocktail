/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";

const ListCocktail = () => {
  const [cocktails, setCocktail] = useState(null);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const lastCocktails = data.drinks.slice(0, 10);
        setCocktail(lastCocktails);
      });
  }, []);

  if (!cocktails) {
    return <p>Cocktails en chargement</p>;
  }

  return (
    <>
      <section>
        <p>Liste des cocktails</p>
        {cocktails.map((cocktail) => {
          return <CocktailCard cocktail={cocktail} />;
        })}
      </section>
    </>
  );
};

export default ListCocktail;
