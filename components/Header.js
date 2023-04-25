import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.primaryColor};
	padding: 1rem;
`;

const Nav = styled.nav`
	display: flex;
	& > *:not(:last-child) {
		margin-right: 1rem;
	}
`;

const NavLink = styled.a`
	color: ${(props) => props.theme.secondaryColor};
	text-decoration: none;
	cursor: pointer;
	font-size: ${(props) => (props.large ? "1.5rem" : "1rem")};
	border: ${(props) => (props.framed ? "2px solid" : "none")};
	padding: ${(props) => (props.framed ? "0.5rem" : "0")};
	border-radius: ${(props) => (props.framed ? "5px" : "0")};

	&:hover {
		color: ${(props) => props.theme.accentColor};
	}
`;

const Header = () => {
	return (
		<StyledHeader>
			<Link href="#home" passHref>
				<NavLink large>Dennis Buchwald</NavLink>
			</Link>
			<Nav>
				<Link href="#projekte" passHref>
					<NavLink>Projekte</NavLink>
				</Link>
				<Link href="#kontakt" passHref>
					<NavLink framed>Kontakt</NavLink>
				</Link>
			</Nav>
		</StyledHeader>
	);
};

export default Header;
