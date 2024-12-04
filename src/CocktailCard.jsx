/* eslint-disable react/prop-types */
const CocktailCard = ({ cocktail }) => {
  return (
    <article>
      <p>{cocktail.strDrink}</p>
      <img
        width={"100px"}
        src={cocktail.strDrinkThumb}
        alt={cocktail.strDrink}
      />
    </article>
  );
};

export default CocktailCard;
