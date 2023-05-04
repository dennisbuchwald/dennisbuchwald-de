import styled from "styled-components";
import Typewriter from "typewriter-effect";

const Start = () => {
  return (
    <Container>
      <ContainerTyperWriter>
        <Title>
          <TypedTitle>
            <Typewriter
              options={{
                delay: 50,
                deleteSpeed: 5,
                pauseFor: 5,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString(typedStrings[0])
                  .pauseFor(2000)
                  .deleteChars(10)
                  .typeString(typedStrings[1])
                  .pauseFor(2000)
                  .deleteChars(13)
                  .typeString(typedStrings[2])
                  .start();
              }}
            />
          </TypedTitle>
        </Title>
      </ContainerTyperWriter>
    </Container>
  );
};

export default Start;

const Container = styled.div`
  text-align: left;
`;

const ContainerTyperWriter = styled.div`
  width: 80vh;
  top: -4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: left;
    text-align: left;
  }1
`;

const Title = styled.h1`
  font-weight: bold;
  color: black;
`;

const TypedTitle = styled.span`
  position: relative;
  font-size: 4rem;
  font-weight: bold;
  color: black;
  margin-bottom: 1.5rem;
  left: 0;
  @media screen and (max-width: 768px) {
    position: relative;
    font-size: 2rem;
    left: 0;
    transform: none;
    text-align: left;
  }
`;

const typedStrings = [
  "Hallo! <br />Mein Name ist Dennis.<br />Ich bin ein Freigeist.",
  "Problemlöser.",
  "Webentwickler!",
];
