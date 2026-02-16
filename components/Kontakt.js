import React, { useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

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
				setShowForm(false);
				setLoading(false);
			},
			(error) => {
				setErrorMessage(
					"Das hat leider nicht geklappt. Schreib mir gerne direkt auf LinkedIn."
				);
				setLoading(false);
			}
		);

		formRef.current.reset();
	};

	return (
		<div id="kontakt">
			<Container>
				<Title>Lass uns reden.</Title>
				<Subtitle>
					Du hast ein Projekt im Kopf oder eine Frage? Schreib mir – ich melde
					mich zeitnah.
				</Subtitle>

				<FormWrapper>
					{loading ? (
						<SpinnerWrapper>
							<Spinner />
						</SpinnerWrapper>
					) : showForm ? (
						<Form ref={formRef} onSubmit={handleSubmit}>
							<InputGroup>
								<Input
									type="text"
									name="from_name"
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder="Name"
									required
								/>
								<Input
									type="email"
									name="from_email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="E-Mail"
									required
								/>
							</InputGroup>
							<Input
								type="text"
								name="from_subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								placeholder="Betreff"
								required
							/>
							<Textarea
								name="message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								placeholder="Deine Nachricht..."
								rows={5}
								required
							/>
							<Button type="submit">Nachricht senden</Button>
						</Form>
					) : (
						<SuccessMessage>
							{errorMessage || "Nachricht gesendet! Ich melde mich bei dir."}
						</SuccessMessage>
					)}
				</FormWrapper>

				<SocialLinks>
					<SocialLink
						href="https://www.linkedin.com/in/dennisbuchwald/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<FaLinkedin size={24} />
					</SocialLink>
					<SocialLink
						href="https://github.com/dennisbuchwald"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<FaGithub size={24} />
					</SocialLink>
				</SocialLinks>
			</Container>
		</div>
	);
};

export default Kontakt;

const Container = styled.div`
	width: 100%;
	max-width: 600px;
	margin: 0 auto;
`;

const Title = styled.h2`
	font-size: 3rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin-bottom: 1rem;

	@media (max-width: 768px) {
		font-size: 2.2rem;
	}
`;

const Subtitle = styled.p`
	font-size: 1.15rem;
	line-height: 1.7;
	color: ${(props) => props.theme.textSecondary};
	margin-bottom: 2.5rem;
`;

const FormWrapper = styled.div`
	width: 100%;
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 100%;
`;

const InputGroup = styled.div`
	display: flex;
	gap: 1rem;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Input = styled.input`
	flex: 1;
	padding: 0.9rem 1rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 0.75rem;
	color: ${(props) => props.theme.text};
	font-size: 1rem;
	font-family: inherit;
	transition: border-color 0.2s ease;

	&::placeholder {
		color: ${(props) => props.theme.textMuted};
	}

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.accent};
	}
`;

const Textarea = styled.textarea`
	padding: 0.9rem 1rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 0.75rem;
	color: ${(props) => props.theme.text};
	font-size: 1rem;
	font-family: inherit;
	resize: vertical;
	min-height: 120px;
	transition: border-color 0.2s ease;

	&::placeholder {
		color: ${(props) => props.theme.textMuted};
	}

	&:focus {
		outline: none;
		border-color: ${(props) => props.theme.accent};
	}
`;

const Button = styled.button`
	padding: 0.9rem 2rem;
	background: ${(props) => props.theme.gradient};
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	font-family: inherit;
	border: none;
	border-radius: 0.75rem;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px ${(props) => props.theme.gradientGlow};
	}
`;

const SuccessMessage = styled.p`
	font-size: 1.1rem;
	color: ${(props) => props.theme.text};
	text-align: center;
	padding: 2rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 0.75rem;
`;

const SocialLinks = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 2rem;
`;

const SocialLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 48px;
	height: 48px;
	border-radius: 0.75rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	color: ${(props) => props.theme.textSecondary};
	transition: all 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accent};
		border-color: ${(props) => props.theme.accent};
		transform: translateY(-2px);
	}
`;

const SpinnerWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding: 3rem;
`;

const spin = keyframes`
	to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
	width: 32px;
	height: 32px;
	border: 3px solid ${(props) => props.theme.borderCard};
	border-top-color: ${(props) => props.theme.accent};
	border-radius: 50%;
	animation: ${spin} 0.75s linear infinite;
`;
