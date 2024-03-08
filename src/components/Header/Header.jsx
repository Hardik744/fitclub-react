import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
         style={{backgroundColor: "var(--appColor)", padding: "0.5rem", borderRadius:"5px"}}
         onClick= {()=>setmenuOpened(true)}>
          <img src={Bars} alt=""  style={{width: "1.5rem", height: "1.5rem"}}/>
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={()=>setmenuOpened(false)}>
            
            Home</li>
          <li onClick={()=>setmenuOpened(false)}>Programs</li>
          <li> <Link onClick={()=>setmenuOpened(false)} to="why us" span={true} smooth={true}>Why us</Link></li>
          <li> <Link onClick={()=>setmenuOpened(false)} to="plans" span={true} smooth={true}>Plans</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
