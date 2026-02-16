import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
	return (
		<StyledFooter>
			<FooterInner>
				<FooterLeft>
					Mit ❤️ gemacht in Heilbronn – &copy; {new Date().getFullYear()}{" "}
					<AccentLink
						href="https://dbw-media.de"
						target="_blank"
						rel="noopener noreferrer"
					>
						dbw media
					</AccentLink>
				</FooterLeft>
				<FooterRight>
					<FooterNavLink href="/impressum">Impressum</FooterNavLink>
					<FooterNavLink href="/datenschutzerklaerung">
						Datenschutzerklärung
					</FooterNavLink>
				</FooterRight>
			</FooterInner>
		</StyledFooter>
	);
};

export default Footer;

const FooterNavLink = ({ href, children }) => (
	<Link href={href} passHref legacyBehavior>
		<StyledNavLink>{children}</StyledNavLink>
	</Link>
);

const StyledFooter = styled.footer`
	width: 100%;
	border-top: 1px solid ${(props) => props.theme.borderCard};
	background: ${(props) => props.theme.bg};
`;

const FooterInner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 2rem 4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 768px) {
		padding: 1.5rem;
		flex-direction: column;
		gap: 1rem;
		text-align: center;
	}
`;

const FooterLeft = styled.p`
	font-size: 0.9rem;
	color: ${(props) => props.theme.textMuted};
`;

const AccentLink = styled.a`
	color: ${(props) => props.theme.accent};
	text-decoration: none;
	font-weight: 600;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accentHover};
	}
`;

const FooterRight = styled.nav`
	display: flex;
	gap: 1.5rem;
`;

const StyledNavLink = styled.a`
	font-size: 0.9rem;
	color: ${(props) => props.theme.textMuted};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.text};
	}
`;
