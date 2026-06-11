import styled from "styled-components";
import { FaGithub, FaWordpress, FaExternalLinkAlt } from "react-icons/fa";
import { apps } from "./appsData";

const linkIcon = (type) => {
	if (type === "github") return <FaGithub />;
	if (type === "wordpress") return <FaWordpress />;
	return <FaExternalLinkAlt />;
};

const AppsGrid = () => {
	return (
		<Grid>
			{apps.map((app) => (
				<Card key={app.slug}>
					<CardTop>
						<IconTile>
							<FaWordpress />
						</IconTile>
						<Badges>
							{app.badges.map((badge) => (
								<Badge key={badge}>{badge}</Badge>
							))}
						</Badges>
					</CardTop>
					<CardTitle>{app.name}</CardTitle>
					<Tagline>{app.tagline}</Tagline>
					<Description>{app.description}</Description>
					<Tags>
						{app.tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</Tags>
					<Links>
						{app.links.map((link) => (
							<CardLink
								key={link.href}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
							>
								{linkIcon(link.type)} {link.label}
							</CardLink>
						))}
					</Links>
				</Card>
			))}
		</Grid>
	);
};

export default AppsGrid;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	width: 100%;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

const Card = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1.75rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1.25rem;
	transition: border-color 0.2s ease, transform 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.borderCardHover};
		transform: translateY(-3px);
	}
`;

const CardTop = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 0.75rem;
	margin-bottom: 0.5rem;
`;

const IconTile = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 3rem;
	height: 3rem;
	flex-shrink: 0;
	border-radius: 0.85rem;
	font-size: 1.5rem;
	color: #fff;
	background: ${(props) => props.theme.gradient};
`;

const Badges = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	gap: 0.4rem;
`;

const Badge = styled.span`
	font-size: 0.7rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	padding: 0.22rem 0.6rem;
	border-radius: 999px;
	color: ${(props) => props.theme.textSecondary};
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
`;

const CardTitle = styled.h3`
	font-size: 1.2rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;
`;

const Tagline = styled.p`
	font-size: 0.95rem;
	font-weight: 600;
	color: ${(props) => props.theme.accentHover};
	margin: 0;
`;

const Description = styled.p`
	font-size: 0.9rem;
	line-height: 1.65;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
	flex: 1;
`;

const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
`;

const Tag = styled.span`
	font-size: 0.72rem;
	font-weight: 600;
	letter-spacing: 0.04em;
	padding: 0.22rem 0.65rem;
	border-radius: 999px;
	color: #fff;
	background: linear-gradient(
				${(props) => props.theme.bg},
				${(props) => props.theme.bg}
			)
			padding-box,
		linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)
			border-box;
	border: 1px solid transparent;
`;

const Links = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 0.25rem;
`;

const CardLink = styled.a`
	display: flex;
	align-items: center;
	gap: 0.35rem;
	font-size: 0.85rem;
	color: ${(props) => props.theme.textSecondary};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accent};
	}
`;
