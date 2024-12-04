const Header = ({ userName }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
          </ul>
        </nav>
        <p>{userName}</p>
      </header>
    </>
  );
};

export default Header;
