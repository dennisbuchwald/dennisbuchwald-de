import styled from "styled-components";
import Link from "next/link";
import AppsGrid from "./AppsGrid";

const AppsTeaser = () => {
	return (
		<Container id="apps">
			<Top>
				<Eyebrow>Apps & Plugins</Eyebrow>
				<Heading>Eigene Produkte statt nur Projekte.</Heading>
				<Sub>
					Aus echten Kundenproblemen entstanden und zu eigenen Produkten
					gereift: WordPress-Plugins und Tools, die wir selbst jeden Tag
					einsetzen.
				</Sub>
			</Top>
			<AppsGrid />
			<AllAppsLink href="/apps">Alle Apps & Plugins ansehen →</AllAppsLink>
		</Container>
	);
};

export default AppsTeaser;

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;
`;

const Top = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.75rem;
`;

const Eyebrow = styled.span`
	display: inline-block;
	padding: 0.28rem 0.85rem;
	font-size: 0.75rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	color: ${(props) => props.theme.text};
	border-radius: 999px;
	background:
		linear-gradient(${(props) => props.theme.bg}, ${(props) => props.theme.bg})
			padding-box,
		linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)
			border-box;
	border: 1px solid transparent;
`;

const Heading = styled.h2`
	font-size: 2.25rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;

	@media (max-width: 768px) {
		font-size: 1.75rem;
	}
`;

const Sub = styled.p`
	font-size: 1rem;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
	max-width: 560px;
`;

const AllAppsLink = styled(Link)`
	display: inline-flex;
	align-items: center;
	padding: 0.8rem 1.75rem;
	background: transparent;
	color: ${(props) => props.theme.text};
	font-size: 0.95rem;
	font-weight: 700;
	border: 1.5px solid ${(props) => props.theme.borderCard};
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.borderCardHover};
		transform: translateY(-2px);
	}
`;
