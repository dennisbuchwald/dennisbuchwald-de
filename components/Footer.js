import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.secondaryColor};
  padding: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        &copy; {new Date().getFullYear()} Mein Portfolio. Alle Rechte
        vorbehalten.
      </p>
    </StyledFooter>
  );
};

export default Footer;
