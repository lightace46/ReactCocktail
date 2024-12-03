const Header = () => {
  const isAuthenticated = true;

  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/ShowPokemon">pokemon</a>
            </li>
          </ul>
        </nav>
        {isAuthenticated ? (
          <p>Vous êtes connecté !</p>
        ) : (
          <p>Merci de vous connecter</p>
        )}
      </header>
    </>
  );
};

export default Header;
