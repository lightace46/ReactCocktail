import { useEffect, useState } from "react";
import CocktailCard from "./CocktailCard";

const FetchCokctail = ({ url }) => {
  const [cocktails, setCocktail] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCocktail(data.drinks);
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

export default FetchCokctail;
