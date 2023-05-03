import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import { RotatingLines } from "react-loader-spinner";

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const USER_ID = process.env.NEXT_PUBLIC_USER_ID;

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
			<ContainerHeader>
				<Title>Kontakt</Title>
				<Text>
					Na, neugierig geworden oder eine Frage im Kopf? <br /> Schick mir ne
					Nachricht - ich freu mich drauf! 🚀😉
				</Text>
			</ContainerHeader>
			<FormContainer>
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
						href="https://www.linkedin.com/in/dennisbuchwald/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin size={48} />
					</LinkedInLink>
					<GitHubLink
						href="https://github.com/dennisbuchwald"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub size={48} />
					</GitHubLink>
				</LinkContainer>
			</FormContainer>
		</>
	);
};

export default Kontakt;

const ContainerHeader = styled.div`
	text-align: center;
	align-items: center;
`;

const Title = styled.h3`
	font-size: 2rem;
	margin-bottom: 1rem;
`;

const Text = styled.p`
	font-size: 1.2rem;
	line-height: 1.6;
	max-width: 1000px;
	text-align: justify;
	margin-bottom: 1.5rem;
`;

const FormContainer = styled.main`
	aling-item: center;
	min-width: 200px;
	width: 100%;
	max-width: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.textColor};
	padding: 1rem;
`;

const Form = styled.form`
	font-size: 1.2rem;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	min-width: 200px;
	width: 100%;
	max-width: 800px;
	margin: 0 auto;
	aling-items: flex;
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

	transition: transform 0.3s ease;

	&:hover {
		background-color: ${(props) => props.theme.accentColor};
		transform: translateY(-2.5px);
	}
`;

const LinkedInLink = styled.a`
	padding: 1rem;
	margin-top: 1rem;
	color: ${(props) => props.theme.textColor};
	transition: color 0.3s ease, transform 0.3s ease;

	&:hover {
		color: ${(props) => props.theme.accentColor};
		transform: translateY(-5px);
	}
`;

const GitHubLink = styled.a`
	padding: 1rem;

	margin-top: 1rem;
	color: ${(props) => props.theme.textColor};
	transition: color 0.3s ease, transform 0.3s ease;

	&:hover {
		color: ${(props) => props.theme.accentColor};
		transform: translateY(-5px);
	}
`;

const LinkContainer = styled.section`
	margin: 2rem;
`;
