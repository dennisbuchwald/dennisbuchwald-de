import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 6rem);
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.primaryColor};
	padding: 2rem;
`;

const Impressum = () => {
	return (
		<>
			<Header />
			<Main>
				<h1>Impressum</h1>
				<p>Hier können Sie Ihre Impressum-Informationen einfügen.</p>
			</Main>
			<Footer />
		</>
	);
};

export default Impressum;
