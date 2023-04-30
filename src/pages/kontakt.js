import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import { RotatingLines } from "react-loader-spinner";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 6rem);
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.textColor};
  padding: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.buttonTextColor};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const LinkedInLink = styled.a`
  padding: 1rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.textColor};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const GitHubLink = styled.a`
  padding: 1rem;

  margin-top: 1rem;
  color: ${(props) => props.theme.textColor};
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const LinkContainer = styled.section`
  margin: 2rem;
`;

const Kontakt = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log("E-Mail erfolgreich gesendet!", result.text);
        setShowForm(false);
        setLoading(false);
      },
      (error) => {
        console.log("E-Mail konnte nicht gesendet werden: ", error.text);
        setErrorMessage(
          "Das hat leider nicht geklappt, versuche es doch besser auf LinkedIn mich zu erreichen"
        );
        setLoading(false);
      }
    );

    formRef.current.reset();
  };

  return (
    <>
      <Main>
        <h1>Kontakt</h1>
        <p>
          Na, neugierig geworden oder eine Fragen im Kopf? <br /> Schick mir ne
          Nachricht - ich freu mich drauf! 🚀😉
        </p>
        {loading ? (
          <RotatingLines
            strokeColor="#ff4081"
            strokeWidth="5"
            animationDuration="0.75"
            width="32"
            visible={true}
          />
        ) : showForm ? (
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              name="from_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dein Name"
              required
            />
            <Label htmlFor="email">E-Mail:</Label>
            <Input
              type="email"
              name="from_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              required
            />
            <Label htmlFor="subject">Betreff:</Label>
            <Input
              type="text"
              name="from_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Betreff deiner Nachricht"
              required
            />
            <Label htmlFor="message">Nachricht:</Label>
            <Textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Schreibe hier deine Nachricht"
              required
            />
            <Button type="submit">Senden</Button>
          </Form>
        ) : (
          <p>
            {errorMessage ||
              "Deine Email ist erfolgreich an mich gesendet worden! Ich Antworte dir so schnell ich kann. ❤️"}
          </p>
        )}
        <LinkContainer>
          <LinkedInLink
            href="hhttps://www.linkedin.com/in/dennisbuchwald/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={32} />
          </LinkedInLink>
          <GitHubLink
            href="https://github.com/dennisbuchwald"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={32} />
          </GitHubLink>
        </LinkContainer>
      </Main>
    </>
  );
};

export default Kontakt;
