import { useState } from "react";

const ListCocktail = () => {
  const [cocktails, setCocktail] = useState(null);

  if (cocktails.length === 0) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCocktail(data);
      });
  }

  return (
    <>
      <p>Liste des cocktails</p>
    </>
  );
};

export default ListCocktail;
