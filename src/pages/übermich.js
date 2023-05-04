import styled from "styled-components";
import Image from "next/image";

import profilbild from "../../public/profilbild.png";
import profilbildHover from "../../public/profilbild_hover.png";

const ÜberMich = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <TextContainer>
            <Text>
              Hey, ich bin ein kreativer Frontend-Entwickler aus Heilbronn. Ich
              habe erfolgreich das Web Developer Bootcamp bei &quot;neue
              fische&quot; absolviert! <br /> <br />
              Wofür brenne ich? Für die Entwicklung von Webanwendungen, die
              durch ihre Optik und Funktionalität glänzen. Eines meiner
              Highlights während des Bootcamps war die Entwicklung meines
              Capstone-Projekts &quot;Pokemon Battler&quot; – ein Projekt, das
              meine Hingabe für die Webentwicklung perfekt zum Ausdruck bringt!
            </Text>
          </TextContainer>
          <ProfileImage>
            <Image src={profilbild} alt="Profilbild" width={500} height={500} />
            <Image
              src={profilbildHover}
              alt="Profilbild Hover"
              width={500}
              height={500}
            />
          </ProfileImage>
        </MainContainer>
      </Container>
    </>
  );
};

export default ÜberMich;

const Container = styled.div`
  // border: 1px solid red;
  width: 100%;
  display: grid;
  grid-template-rows: auto auto;
  align-items: center;
`;

const MainContainer = styled.section`
  // border: 1px solid pink;

  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  // padding: 0 5%;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const ProfileImage = styled.div`
  width: 45%;
  height: 0;
  padding-bottom: 100%;
  max-width: 500px;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  img:first-child {
    z-index: 1;
  }

  img:last-child {
    opacity: 0;
  }

  &:hover img:first-child {
    opacity: 0;
    transform: translateY(-10px) scale(1);
  }

  &:hover img:last-child {
    opacity: 1;
    transform: translateY(-10px) scale(1);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TextContainer = styled.section`
  // border: 1px solid yellow;
  left: 0;
  padding: 0rem;
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.p`
  // border: 1px solid blue;

  font-size: 1.5rem;
  line-height: 1.6;
  width: 100%;
  text-align: left;
  margin-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;
