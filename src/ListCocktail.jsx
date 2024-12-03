import { useState } from "react";

const ListCocktail = () => {
  const [cocktails, setCocktail] = useState([]);

  if (cocktails.length === 0) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <>
      <p>Liste des cocktails</p>
    </>
  );
};

export default ListCocktail;
