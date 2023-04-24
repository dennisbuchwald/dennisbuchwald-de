import styled from "styled-components";
import Header from "../../components//Header";
import Footer from "../../components/Footer";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 6rem);
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  padding: 1rem;
`;

const Projekte = () => {
  return (
    <>
      <Header />
      <Main>
        <h1>Projekte</h1>
        <p>Hier sehen Sie einige meiner bisherigen Projekte.</p>
      </Main>
      <Footer />
    </>
  );
};

export default Projekte;
