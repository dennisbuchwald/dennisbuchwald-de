import styled from "styled-components";

export const MenuItem = styled.button`
	// gemeinsame Stile für alle Menüpunkte
	background: none;
	border: none;
	text-decoration: none;
	cursor: pointer;
	outline: none;
	margin: 1rem;

	// Stile, die aufgrund der übergebenen Eigenschaften geändert werden
	color: ${(props) => (props.changeColor ? props.textColor : "white")};
	font-size: ${(props) => (props.large ? "1.5rem" : "1rem")};
	border: ${(props) => (props.framed ? "2px solid" : "none")};
	padding: ${(props) => (props.framed ? "0.5rem" : "0")};
	border-radius: ${(props) => (props.framed ? "5px" : "0")};

	// Hover-Animation hinzufügen

	&:hover {
		color: ${(props) => props.theme.accentColor};
		transform: translateY(-5px);
	}

	@media screen and (max-width: 768px) {
		margin: 0rem;
		font-size: 1.5rem;
		padding: 0.5rem;
		text-align: center;
		align-items: center;
		justify-content: center;
		color: ${(props) => (props.changeColor ? props.textColor : "white")};
	}
`;
