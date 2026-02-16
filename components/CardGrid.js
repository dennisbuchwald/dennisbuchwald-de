import styled from "styled-components";

export const SectionHeader = styled.div`
	text-align: center;
	margin-bottom: 3rem;
`;

export const SectionTitle = styled.h2`
	font-size: 3rem;
	font-weight: 700;
	margin-bottom: 1rem;
	color: ${(props) => props.theme.text};

	@media (max-width: 768px) {
		font-size: 2.2rem;
	}
`;

export const SectionText = styled.p`
	font-size: 1.15rem;
	line-height: 1.7;
	max-width: 600px;
	margin: 0 auto;
	color: ${(props) => props.theme.textSecondary};
`;

export const CardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 2rem;
	width: 100%;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		padding: 0 1rem;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: ${(props) => props.theme.bgCard};
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border: 1px solid ${(props) => props.theme.borderCard};
	color: ${(props) => props.theme.text};
	padding: 2rem;
	border-radius: 1.25rem;
	flex-basis: calc(33% - 2rem);
	max-width: ${(props) => props.$maxWidth || "calc(33% - 2rem)"};
	min-width: ${(props) => props.$minWidth || "300px"};
	text-align: center;
	transition: all 0.3s ease;

	&:hover {
		background: ${(props) => props.theme.bgCardHover};
		border-color: ${(props) => props.theme.borderCardHover};
		transform: translateY(-4px);
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
			0 0 30px ${(props) => props.theme.accentGlow};
	}

	@media (max-width: 1024px) {
		flex-basis: calc(50% - 2rem);
		max-width: calc(50% - 2rem);
		min-width: 300px;
	}

	@media (max-width: 768px) {
		min-width: 100%;
		max-width: 100%;
	}
`;

export const CardTitle = styled.h3`
	font-size: 1.4rem;
	font-weight: 600;
	margin-bottom: 1rem;
	color: ${(props) => props.theme.text};
`;

export const CardDescription = styled.p`
	font-size: 1rem;
	line-height: 1.6;
	margin-bottom: 1.5rem;
	color: ${(props) => props.theme.textSecondary};

	@media (max-width: 768px) {
		font-size: 0.95rem;
	}
`;

export const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	margin-bottom: 1.5rem;
`;

export const Tag = styled.span`
	background: ${(props) => props.theme.accentGlow};
	color: ${(props) => props.theme.accentHover};
	font-size: 0.8rem;
	font-weight: 500;
	padding: 0.3rem 0.75rem;
	border-radius: 999px;
	border: 1px solid rgba(126, 86, 255, 0.2);
`;

export const Links = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	margin-top: auto;
`;

export const CardLink = styled.a`
	display: flex;
	align-items: center;
	gap: 0.4rem;
	color: ${(props) => props.theme.textSecondary};
	font-size: 0.95rem;
	text-decoration: none;
	transition: color 0.2s ease, transform 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accent};
		transform: translateY(-2px);
	}
`;
