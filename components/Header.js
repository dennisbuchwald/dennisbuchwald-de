import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
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

	& > *:last-child {
		margin-right: 2rem;
	}

	@media screen and (max-width: 768px) {
		display: none;
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

	@media screen and (max-width: 768px) {
		font-size: 1.5rem;
		padding: 1rem;
		width: 100%;
		text-align: center;
	}
`;
const MenuIcon = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.secondaryColor};
	cursor: pointer;
	font-size: 1.5rem;
	outline: none;
	display: none;

	@media screen and (max-width: 768px) {
		display: block;
	}
`;

const MenuOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: ${(props) => props.theme.primaryColor};
	display: ${(props) => (props.open ? "block" : "none")};
	z-index: 999;
`;

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<>
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
				<MenuIcon onClick={handleMenuClick}>
					{menuOpen ? (
						<i className="fas fa-times"></i>
					) : (
						<i className="fas fa-bars"></i>
					)}
				</MenuIcon>
			</StyledHeader>
			<MenuOverlay open={menuOpen}>
				<Nav>
					<Link href="/#projekte" passHref>
						<NavLink onClick={handleMenuClick}>Projekte</NavLink>
					</Link>
					<Link href="/#kontakt" passHref>
						<NavLink framed onClick={handleMenuClick}>
							Kontakt
						</NavLink>
					</Link>
				</Nav>
			</MenuOverlay>
		</>
	);
};

export default Header;
