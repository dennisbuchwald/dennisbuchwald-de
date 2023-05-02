import { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [headerBackground, setHeaderBackground] = useState("transparent");
	const [textColor, setTextColor] = useState("black");

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
	};

	const listenScrollEvent = () => {
		if (window.scrollY > 50) {
			setHeaderBackground("#000000");
			setTextColor("white");
		} else {
			setHeaderBackground("transparent");
			setTextColor("black");
		}
	};

	const smoothScroll = (target, duration = 1500) => {
		const element = document.querySelector(target);
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
		if (duration) {
			setTimeout(() => {
				window.history.pushState(null, "", target);
			}, duration);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => {
			window.removeEventListener("scroll", listenScrollEvent);
		};
	}, []);

	return (
		<>
			<HeaderContainer>
				<StyledHeader backgroundColor={headerBackground}>
					<NavLink
						textColor={textColor}
						large
						changeColor
						onClick={() => {
							smoothScroll("#top", 1500);
						}}
					>
						Dennis Buchwald
					</NavLink>
					<Nav>
						<NavLink
							textColor={textColor}
							changeColor
							onClick={() => smoothScroll("#projekte", 1500)}
						>
							Projekte
						</NavLink>
						<NavLink
							textColor={textColor}
							changeColor
							onClick={() => smoothScroll("#kontakt", 1500)}
						>
							Kontakt
						</NavLink>
					</Nav>
					<MenuIcon textColor={textColor} onClick={handleMenuClick}>
						{menuOpen ? (
							<FontAwesomeIcon icon={faTimes} />
						) : (
							<FontAwesomeIcon icon={faBars} />
						)}
					</MenuIcon>
				</StyledHeader>
			</HeaderContainer>

			<MenuOverlay open={menuOpen}>
				<Nav open={menuOpen}>
					<NavLink
						onClick={() => {
							handleMenuClick();
							smoothScroll("#projekte", 1000);
						}}
					>
						Projekte
					</NavLink>
					<NavLink
						framed
						onClick={() => {
							handleMenuClick();
							smoothScroll("#kontakt", 1000);
						}}
					>
						Kontakt
					</NavLink>
				</Nav>
			</MenuOverlay>
		</>
	);
};

export default Header;

const HeaderContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
`;

const StyledHeader = styled.header`
	z-index: 1000;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.backgroundColor};
	padding: 1rem;
	max-width: 100%;
	margin: 0 auto;
	transition: background-color 0.3s ease;
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
		display: ${(props) => (props.open ? "flex" : "none")};
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;

		& > * {
			text-align: center;
		}
	}
`;

const NavLink = styled.button`
	background: none;
	border: none;
	color: ${(props) => (props.changeColor ? props.textColor : "white")};
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
		align-items: center;
		justify-content: center;
		color: ${(props) => (props.changeColor ? props.textColor : "white")};
	}
`;

const MenuIcon = styled.button`
	margin-right: 2rem;
	background: none;
	border: none;
	color: ${(props) => props.textColor};
	cursor: pointer;
	font-size: 1.5rem;
	outline: none;
	display: none;
	z-index: 1000;
	@media screen and (max-width: 768px) {
		display: block;
	}
`;

const MenuOverlay = styled.div`
	align-items: center;
	position: fixed;
	top: 0;
	right: ${(props) => (props.open ? "0" : "-100%")};
	width: 40%;
	height: 100%;
	background-color: ${(props) => props.theme.primaryColor};
	transition: right 0.3s ease;
	z-index: 999;

	@media screen and (max-width: 768px) {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: center;
	}

	& ${Nav} {
		justify-content: center;
		width: 100%;
	}
`;
