import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/6433968/pexels-photo-6433968.jpeg"
        alt="Photo by Artur Roman from Pexels"
      />
    </div>
  );
};

export default Header;
