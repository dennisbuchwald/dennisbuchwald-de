import styled from "styled-components";
import Image from "next/image";

const services = [
	"Webdesign",
	"SEO",
	"Online-Marketing",
	"Digitalstrategie",
	"Social Media",
];

const DBWMedia = () => {
	return (
		<Section>
			<Inner>
				<TopLine />
				<Content>
					<LogoWrapper>
						<Image
							src="/dbw-logo_white.png"
							alt="dbw media – Digitalagentur"
							width={320}
							height={320}
							style={{ width: "280px", height: "auto" }}
						/>
					</LogoWrapper>
					<Tagline>
						Digitalagentur für Unternehmen,
						<br />
						die online wachsen wollen.
					</Tagline>
					<Services>
						{services.map((s, i) => (
							<span key={s}>
								{s}
								{i < services.length - 1 && <Sep>·</Sep>}
							</span>
						))}
					</Services>
					<CTALink
						href="https://dbw-media.de"
						target="_blank"
						rel="noopener noreferrer"
					>
						dbw-media.de besuchen →
					</CTALink>
				</Content>
				<BottomLine />
			</Inner>
		</Section>
	);
};

export default DBWMedia;

const Section = styled.section`
	width: 100%;
	padding: 0 4rem;

	@media (max-width: 768px) {
		padding: 0 1.5rem;
	}
`;

const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
`;

const TopLine = styled.div`
	width: 100%;
	height: 1px;
	background: linear-gradient(
		90deg,
		transparent,
		rgba(255, 255, 255, 0.12),
		transparent
	);
`;

const BottomLine = styled(TopLine)``;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	padding: 6rem 2rem;
	gap: 2rem;
`;

const LogoWrapper = styled.div`
	opacity: 0.95;
`;

const Tagline = styled.p`
	font-size: 1.6rem;
	font-weight: 600;
	color: ${(props) => props.theme.text};
	line-height: 1.4;
	margin: 0;

	@media (max-width: 768px) {
		font-size: 1.25rem;
	}
`;

const Services = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 0.25rem 0.75rem;
	font-size: 0.9rem;
	color: ${(props) => props.theme.textSecondary};
`;

const Sep = styled.span`
	margin-left: 0.75rem;
	color: ${(props) => props.theme.textMuted};
`;

const CTALink = styled.a`
	display: inline-flex;
	align-items: center;
	margin-top: 0.5rem;
	padding: 0.9rem 2.25rem;
	background: linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff);
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.25s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(126, 86, 255, 0.3);
	}
`;
