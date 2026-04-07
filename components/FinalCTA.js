import styled from "styled-components";

const FinalCTA = () => {
	return (
		<Section id="kontakt">
			<Inner>
				<TextCol>
					<Eyebrow>Kontakt</Eyebrow>
					<Heading>Lass uns reden. ❤️</Heading>
					<Sub>
						Du hast ein Projekt, eine Idee oder einfach Lust auf ein Gespräch?
						Ich freue mich drauf.
					</Sub>
				</TextCol>
				<CTACol>
					<PrimaryBtn
						href="https://calendar.app.google/ZeDaDauE5puu3inf6"
						target="_blank"
						rel="noopener noreferrer"
					>
						Termin vereinbaren →
					</PrimaryBtn>
				</CTACol>
			</Inner>
		</Section>
	);
};

export default FinalCTA;

const Section = styled.section`
	width: 100%;
	padding: 6rem 4rem;

	@media (max-width: 768px) {
		padding: 4rem 1.5rem;
	}
`;

const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 3rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
	}
`;

const TextCol = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	flex: 1;
`;

const Eyebrow = styled.span`
	display: inline-block;
	padding: 0.28rem 0.85rem;
	font-size: 0.75rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	color: #fff;
	border-radius: 999px;
	background:
		linear-gradient(${(props) => props.theme.bg}, ${(props) => props.theme.bg})
			padding-box,
		linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)
			border-box;
	border: 1px solid transparent;
	align-self: flex-start;
`;

const Heading = styled.h2`
	font-size: 3.5rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	line-height: 1.1;
	margin: 0;

	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
`;

const Sub = styled.p`
	font-size: 1.1rem;
	line-height: 1.7;
	color: ${(props) => props.theme.textSecondary};
	max-width: 440px;
	margin: 0;
`;

const CTACol = styled.div`
	flex-shrink: 0;
`;

const PrimaryBtn = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 1rem 2.5rem;
	background: linear-gradient(
		135deg,
		#ea2b1f,
		#ff3c6f,
		#ff4fdd,
		#7e56ff,
		#00b2ff
	);
	color: #fff;
	font-size: 1.05rem;
	font-weight: 700;
	border-radius: 999px;
	text-decoration: none;
	white-space: nowrap;
	transition: all 0.25s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(126, 86, 255, 0.3);
	}
`;
