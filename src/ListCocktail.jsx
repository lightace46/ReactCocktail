/* eslint-disable react/jsx-key */
import FetchCokctail from "./FetchCocktails";

const ListCocktail = () => {
  const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

  return <FetchCokctail url={url} />;
};

export default ListCocktail;
