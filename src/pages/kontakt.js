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

const Kontakt = () => {
  return (
    <>
      <Header />
      <Main>
        <h1>Kontakt</h1>
        <p>
          Wenn Sie Fragen haben oder an einer Zusammenarbeit interessiert sind,
          kontaktieren Sie mich bitte.
        </p>
      </Main>
      <Footer />
    </>
  );
};

export default Kontakt;
