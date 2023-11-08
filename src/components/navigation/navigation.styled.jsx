import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Section = styled.div`
    padding: 15px 25px;

    box-shadow: 0px 2px 1px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 1px 6px rgba(46, 47, 66, 0.08);
`;

export const NavCss = styled.nav`
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 24px;
  margin-right: auto;
  padding: 4px 24px;
 
`;

export const NavlinkCss = styled(NavLink)`
  font-weight: 800;
  font-size: 18px;
  line-height: 1.17;
  color:  rgba(5,25,55,1);
  letter-spacing: 0.03em;
  text-transform: uppercase;
  transition: all 250ms;

  &:hover, :active{
    color: rgba(27,163,196,1);
  }

  /* &:active{
    color: rgba(27,163,196,1);
  } */
`;