import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.primaryColor};
	color: ${(props) => props.theme.secondaryColor};
	padding: 1rem;
	width: 100%;
	flex-wrap: wrap;
`;

const FooterText = styled.p`
	margin-right: 1rem;
	@media (max-width: 768px) {
		margin-bottom: 1rem;
	}
`;

const FooterLink = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.secondaryColor};
	text-decoration: none;
	cursor: pointer;
	margin: 0 1rem;
	outline: none;

	&:hover {
		color: ${(props) => props.theme.accentColor};
	}
`;

const StyledLink = styled.nav`
	display: flex;

	margin-right: 1rem;
`;

const Footer = () => {
	return (
		<StyledFooter>
			<FooterText>
				&copy; {new Date().getFullYear()} Made with ❤️ by Dennis Buchwald
			</FooterText>
			<StyledLink>
				<Link href="/impressum" passHref>
					<FooterLink>Impressum</FooterLink>
				</Link>

				<Link href="/datenschutzerklaerung" passHref>
					<FooterLink>Datenschutzerklärung</FooterLink>
				</Link>
			</StyledLink>
		</StyledFooter>
	);
};

export default Footer;
