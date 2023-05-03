import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
	return (
		<StyledFooter>
			<SectionLeft>
				<FooterText>
					&copy; {new Date().getFullYear()} Made with ❤️ by Dennis Buchwald
				</FooterText>
			</SectionLeft>

			<SectionRight>
				<StyledLink>
					<Link href="/impressum" passHref>
						<FooterLink>Impressum</FooterLink>
					</Link>

					<Link href="/datenschutzerklaerung" passHref>
						<FooterLink>Datenschutzerklärung</FooterLink>
					</Link>
				</StyledLink>
			</SectionRight>
		</StyledFooter>
	);
};

export default Footer;

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.textColor};
	padding: 1rem;
	width: 100%;
	flex-wrap: wrap;
	position: sticky;
	bottom: 0;
	margin: 0;
	padding: 1rem;
`;

const FooterText = styled.p`
	left: 0;
	width: 100%;
	margin-right: 1rem;
	@media (max-width: 768px) {
		margin-bottom: 0.5rem;
		text-size: 1rem;
	}
`;

const FooterLink = styled.button`
	text-align: right;
	background: none;
	border: none;
	color: ${(props) => props.theme.textColor};
	text-decoration: none;
	cursor: pointer;
	margin: 0 1rem;
	outline: none;

	transition: transform 0.3s ease;

	&:hover {
		color: ${(props) => props.theme.accentColor};
		transform: translateY(-5px);
	}

	@media (max-width: 768px) {
		right: 0;
	}
`;

const StyledLink = styled.nav`
	display: flex;
	margin-right: 1rem;
	@media (max-width: 768px) {
		right: 0;
		flex-direction: column;
		justify-content: flex-end;
		text-align: right;
	}
`;

const SectionLeft = styled.section`
	flex: 1;
`;

const SectionRight = styled.section`
	display: flex;
	justify-content: flex-end;
	flex: 1;
`;
