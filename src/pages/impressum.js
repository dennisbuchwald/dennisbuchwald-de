import styled from "styled-components";
import Header2 from "../../components/Header2";
import Footer from "../../components/Footer";

const Impressum = () => {
	const Name = "Dennis Buchwald";
	const Straße = "Goethestraße 33";
	const PLZ = "74076";
	const Stadt = "Heilbronn";
	const Email = "hallo@dennisbuchwald.de";

	return (
		<>
			<Header2 />
			<Main>
				<h1>Impressum</h1>
				<h2>Angaben gemäß § 5 TMG:</h2>
				<p>
					{Name}
					<br />
					{Straße}
					<br />
					{PLZ} {Stadt}
				</p>
				<h2>Kontakt:</h2>
				<p>E-Mail: {Email}</p>
				<h2>Haftung für Inhalte</h2>
				<p>
					Als Dienstanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
					diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
					bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
					übermittelte oder gespeicherte fremde Informationen zu überwachen oder
					nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
					hinweisen. Rechtliche Verpflichtungen zur Entfernung oder Sperrung der
					Nutzung von Informationen bleiben hiervon unberührt. Eine
					diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
					einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
					Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
				</p>
				<h2>Haftung für Links</h2>
				<p>
					Unser Angebot enthält Links zu externen Webseiten Dritter. Auf die
					Inhalte dieser Webseiten haben wir keinen Einfluss, daher können wir
					für diese Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
					verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
					Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
					Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
					Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
					permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
					konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
					Bekanntwerden von Rechtsverletzungen werden wir derartige Links
					umgehend entfernen.
				</p>
				<h2>Urheberrecht</h2>
				<p>
					Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
					Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
					Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
					Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
					jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
					sind nur für den privaten Gebrauch gestattet. Die kommerzielle Nutzung
					unserer Inhalte ohne Zustimmung des Urhebers ist untersagt. Soweit die
					Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
					die Urheberrechte Dritter beachtet. Beiträge Dritter sind auf dieser
					Seite als solche gekennzeichnet. Sollten Sie trotzdem auf eine
					Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
					entsprechenden Hinweis. Derartige Inhalte werden dann umgehend
					entfernt.
				</p>
			</Main>
			<Footer />
		</>
	);
};

export default Impressum;

const Main = styled.main`
	border-radius: 4rem;
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
`;
