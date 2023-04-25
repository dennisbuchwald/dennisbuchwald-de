import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.primaryColor};
	padding: 1rem;
	max-width: 100%;
	margin: 0 auto;
`;

const Nav = styled.nav`
	align-items: center;
	display: flex;
	& > *:not(:last-child) {
		margin-right: 1rem;
	}
`;

const NavLink = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.secondaryColor};
	text-decoration: none;
	cursor: pointer;
	font-size: ${(props) => (props.large ? "1.5rem" : "1rem")};
	border: ${(props) => (props.framed ? "2px solid" : "none")};
	padding: ${(props) => (props.framed ? "0.5rem" : "0")};
	border-radius: ${(props) => (props.framed ? "5px" : "0")};
	outline: none;

	&:hover {
		color: ${(props) => props.theme.accentColor};
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Link href="/" passHref>
				<NavLink large>Dennis Buchwald</NavLink>
			</Link>
			<Nav>
				<Link href="/#projekte" passHref>
					<NavLink>Projekte</NavLink>
				</Link>
				<Link href="/#kontakt" passHref>
					<NavLink framed>Kontakt</NavLink>
				</Link>
			</Nav>
		</StyledHeader>
	);
};

export default Header;
