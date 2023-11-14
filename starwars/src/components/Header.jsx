import Nav from "./Nav";

const Header = () => {
  return (
    <div className='header-container'>
      <img
        className='star-wars-img'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1388px-Star_Wars_Logo.svg.png'
      />
      <Nav />
    </div>
  );
};
export default Header;
