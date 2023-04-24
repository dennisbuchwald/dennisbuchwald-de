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
`;

const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <h1>Willkommen zu meinem Portfolio</h1>
        <p>Hier können Sie mehr über mich und meine Projekte erfahren.</p>
      </Main>
      <Footer />
    </>
  );
};

export default Home;
