import React from "react";
import { Outlet } from "react-router-dom";
import { Section, NavCss, NavlinkCss } from "./navigation.styled";

const Navigation = ()=>{

    return(
      <div>
        <Section>
          <NavCss>
            <NavlinkCss to='/'>Home</NavlinkCss>
            <NavlinkCss to='/register'>Register</NavlinkCss>
            <NavlinkCss to='/login'>Login</NavlinkCss>
          </NavCss>
        </Section>
        <Outlet/>
        </div>
    )
}

export default Navigation;