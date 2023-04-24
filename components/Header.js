import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 1rem;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.secondaryColor};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/" passHref>
        <NavLink>Mein Portfolio</NavLink>
      </Link>
      <Nav>
        <Link href="/projekte" passHref>
          <NavLink>Projekte</NavLink>
        </Link>
        <Link href="/kontakt" passHref>
          <NavLink>Kontakt</NavLink>
        </Link>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
