import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
	return (
		<StyledHeader>
			<SectionLeft>
				<HeaderLink href="/">
					<HeaderText>Dennis Buchwald</HeaderText>
				</HeaderLink>
			</SectionLeft>
		</StyledHeader>
	);
};

export default Footer;

const StyledHeader = styled.footer`
	display: flex;HeaderLink
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
	padding: 0.5rem;
`;

const HeaderText = styled.p`
	margin-left: 1rem;
	left: 0;
	font-size: 1.5rem;
	width: 100%;
	margin-right: 1rem;
	@media (max-width: 768px) {
		margin-bottom: 0.5rem;
		text-size: 1rem;
	}
`;

const HeaderLink = styled(Link)`
	text-align: left;
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

const SectionLeft = styled.section`
	flex: 1;
`;
