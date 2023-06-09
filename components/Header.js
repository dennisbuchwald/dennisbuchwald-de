import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "../components/MenuItem";

const menuItems = [
	{
		id: "about",
		text: "Über Mich",
		onClick: "#about",
		framed: false,
		large: false,
	},
	{
		id: "projekte",
		text: "Projekte",
		onClick: "#projekte",
		framed: false,
		large: false,
	},
	{
		id: "youtube",
		text: "Youtube",
		onClick: "#youtube",
		framed: false,
		large: false,
	},
	{
		id: "kontakt",
		text: "Kontakt",
		onClick: "#kontakt",
		framed: true,
		large: false,
	},
];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [headerBackground, setHeaderBackground] = useState("transparent");
	const [textColor, setTextColor] = useState("black");

	const handleMenuClick = () => {
		setMenuOpen(!menuOpen);
		setHeaderBackground("#000000");
		setTextColor("white");
	};

	const listenScrollEvent = () => {
		const aboutSection = document.getElementById("about");
		if (aboutSection) {
			const sectionPosition = aboutSection.getBoundingClientRect().top;
			const offset = 85;

			if (sectionPosition <= offset) {
				setHeaderBackground("#000000");
				setTextColor("white");
			} else {
				setHeaderBackground("transparent");
				setTextColor("black");
			}
		}
	};

	const smoothScroll = (targetSelector) => {
		const target = document.querySelector(targetSelector);
		target.scrollIntoView({ behavior: "smooth" });
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
					<NavTitel
						textColor={textColor}
						large
						changeColor
						onClick={() => {
							smoothScroll("#top");
						}}
					>
						Dennis Buchwald
					</NavTitel>
					<NavDesktop>
						<StyledNavWrapper>
							{menuItems.map((item) => (
								<MenuItem
									key={item.id}
									textColor={textColor}
									changeColor
									framed={item.framed}
									large={item.large}
									onClick={() => smoothScroll(item.onClick)}
								>
									{item.text}
								</MenuItem>
							))}
						</StyledNavWrapper>
					</NavDesktop>
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
				<NavMobil open={menuOpen}>
					{menuItems.map((item) => (
						<MenuItem
							key={item.id}
							textColor={textColor}
							changeColor
							framed={item.framed}
							large={item.large}
							onClick={() => {
								handleMenuClick();
								smoothScroll(item.onClick);
							}}
						>
							{item.text}
						</MenuItem>
					))}
				</NavMobil>
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
	padding-top: 1rem;
	padding-bottom: 1rem;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.backgroundColor};
	padding: ßrem;
	max-width: 100%;
	transition: background-color 0.3s ease;
`;

const NavDesktop = styled.nav`
	align-items: center;
	display: flex;
	margin-right: 4rem;

	& > *:not(:last-child) {
		margin-right: 0rem;
	}

	& > *:last-child {
		margin-right: 0rem;
	}
	@media screen and (max-width: 768px) {
		display: ${(props) => (props.open ? "flex" : "none")};
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		right: -10px;
	}
`;

const NavMobil = styled.nav`
	align-items: center;
	display: flex;
	margin-right: 0rem;

	& > *:not(:last-child) {
		margin-right: 0rem;
	}

	& > *:last-child {
		margin-right: 0rem;
	}
	@media screen and (max-width: 768px) {
		display: ${(props) => (props.open ? "flex" : "none")};
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		width: 100%;
		right: -10px;
	}
`;

const StyledNavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const NavTitel = styled.button`
	margin-left: 4rem;
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

	transition: transform 0.3s ease;

	&:hover {
		color: ${(props) => props.theme.accentColor};
		transform: translateY(-5px);
	}

	@media screen and (max-width: 768px) {
		margin-left: 2rem;
		font-size: 1.5rem;
		padding: 1rem;
		text-align: center;
		align-items: center;
		justify-content: center;
		color: ${(props) => (props.changeColor ? props.textColor : "white")};
	}
`;

const MenuIcon = styled.button`
	margin-right: 4rem;
	background: none;
	border: none;
	color: ${(props) => props.textColor};
	cursor: pointer;
	font-size: 1rem;
	outline: none;
	display: none;
	z-index: 1000;
	@media screen and (max-width: 768px) {
		display: block;
		margin-right: 2rem;
		font-size: 1.5rem;
	}
`;

const MenuOverlay = styled.div`
	align-items: center;
	position: fixed;
	top: 0;
	right: ${(props) => (props.open ? "0" : "-100%")};
	width: 33%;
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

	& ${NavDesktop} {
		justify-content: center;
		width: 100%;
	}

	& ${NavMobil} {
		justify-content: center;
		width: 100%;
	}
`;
