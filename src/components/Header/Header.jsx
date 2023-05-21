import { useEffect, useState } from "react";
import { HeaderWrapperStyled, HeaderStyled } from "./style";
import { useNavigate } from "react-router";

const Header = () => {
  const [isHome, toggle] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isHome) {
      navigate("/employee-list");
    } else {
      navigate("/");
    }
    toggle(!isHome);
  };

  return (
    <HeaderWrapperStyled>
      <HeaderStyled>
        <h1>HRNet</h1>
        <button aria-label="toggle view" onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </HeaderStyled>
    </HeaderWrapperStyled>
  );
};
export default Header;
