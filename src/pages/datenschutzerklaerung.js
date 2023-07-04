import styled from "styled-components";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Datenschutzerklaerung = () => {
	const Name = "Dennis Buchwald";
	const Email = "hallo@dennisbuchwald.de";

	return (
		<>
			<Header />
			<Main>
				<h1>Datenschutzerklärung</h1>
				<p>
					Letzte Änderung: 24. Juni 2023
					<br />
					Verantwortlicher für den Datenschutz: {Name}
					<br />
					Kontaktinformationen: {Email}
					<br />
					Für die Besucher von dennisbuchwald.de verwenden wir keine Cookies und
					erheben keine personenbezogenen Daten.
				</p>
				<h2>Als Besucher der dennisbuchwald.de Webseite</h2>
				<p>
					Es werden keine persönlichen Daten erhoben oder gespeichert. Keine
					Informationen werden an Werbefirmen weitergegeben. Es werden keine
					Informationen über persönliche und verhaltensbezogene Trends gesammelt
					und ausgewertet.
				</p>
				<h2>Externe Dienste und Datenverarbeitung</h2>
				<p>
					Wir verwenden keine externen Dienste, die personenbezogene Daten von
					Nutzern sammeln und verwenden.
				</p>
				<h2>Ihre Datenschutzrechte</h2>
				<p>
					Da wir keine personenbezogenen Daten erheben, sind Ihre
					Datenschutzrechte in diesem Zusammenhang nicht betroffen.
				</p>
			</Main>
			<Footer />
		</>
	);
};

export default Datenschutzerklaerung;

const Main = styled.main`
		margin-top: 100px;
	margin: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	min-height: calc(100vh - 6rem);
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.textColor};
	padding: 2rem;
		@media screen and (max-width: 768px) {
		margin-top: 100px;
`;
