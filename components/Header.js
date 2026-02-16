import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const menuItems = [
	{ id: "about", text: "Über Mich", onClick: "#about" },
	{ id: "projekte", text: "Early Work", onClick: "#projekte" },
	{ id: "youtube", text: "YouTube", onClick: "#youtube" },
	{ id: "kontakt", text: "Kontakt", onClick: "#kontakt" },
];

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	const smoothScroll = (targetSelector) => {
		const target = document.querySelector(targetSelector);
		if (target) target.scrollIntoView({ behavior: "smooth" });
	};

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			<StyledHeader $scrolled={scrolled}>
				<Logo
					onClick={() => smoothScroll("#top")}
					aria-label="Nach oben scrollen"
				>
					Dennis Buchwald
				</Logo>
				<NavDesktop>
					{menuItems.map((item) => (
						<NavItem
							key={item.id}
							onClick={() => smoothScroll(item.onClick)}
						>
							{item.text}
						</NavItem>
					))}
				</NavDesktop>
				<MenuIcon
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Menü öffnen"
				>
					{menuOpen ? <FaTimes /> : <FaBars />}
				</MenuIcon>
			</StyledHeader>

			<MenuOverlay $open={menuOpen} onClick={() => setMenuOpen(false)}>
				<MobileNav>
					{menuItems.map((item) => (
						<MobileNavItem
							key={item.id}
							onClick={() => {
								setMenuOpen(false);
								smoothScroll(item.onClick);
							}}
						>
							{item.text}
						</MobileNavItem>
					))}
				</MobileNav>
			</MenuOverlay>
		</>
	);
};

export default Header;

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 4rem;
	z-index: 1000;
	transition: all 0.3s ease;
	background: ${(props) =>
		props.$scrolled ? "rgba(10, 10, 10, 0.85)" : "transparent"};
	backdrop-filter: ${(props) => (props.$scrolled ? "blur(12px)" : "none")};
	-webkit-backdrop-filter: ${(props) =>
		props.$scrolled ? "blur(12px)" : "none"};
	border-bottom: 1px solid
		${(props) =>
			props.$scrolled ? "rgba(255, 255, 255, 0.06)" : "transparent"};

	@media (max-width: 768px) {
		padding: 1rem 1.5rem;
	}
`;

const Logo = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.text};
	font-size: 1.3rem;
	font-weight: 700;
	font-family: inherit;
	cursor: pointer;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accent};
	}
`;

const NavDesktop = styled.nav`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	@media (max-width: 768px) {
		display: none;
	}
`;

const NavItem = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.textSecondary};
	font-size: 0.95rem;
	font-family: inherit;
	cursor: pointer;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	transition: all 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.text};
		background: rgba(255, 255, 255, 0.05);
	}
`;

const MenuIcon = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.text};
	cursor: pointer;
	font-size: 1.3rem;
	display: none;
	z-index: 1001;

	@media (max-width: 768px) {
		display: block;
	}
`;

const MenuOverlay = styled.div`
	position: fixed;
	inset: 0;
	background: rgba(10, 10, 10, 0.95);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${(props) => (props.$open ? 1 : 0)};
	pointer-events: ${(props) => (props.$open ? "all" : "none")};
	transition: opacity 0.3s ease;
`;

const MobileNav = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
`;

const MobileNavItem = styled.button`
	background: none;
	border: none;
	color: ${(props) => props.theme.text};
	font-size: 1.8rem;
	font-weight: 600;
	font-family: inherit;
	cursor: pointer;
	padding: 0.75rem 2rem;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accent};
	}
`;
