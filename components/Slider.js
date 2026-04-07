import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = ({ children, cardWidth = 320, startPadding }) => {
	const trackRef = useRef(null);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(true);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		const check = () => {
			setCanScrollLeft(track.scrollLeft > 10);
			setCanScrollRight(
				track.scrollLeft < track.scrollWidth - track.clientWidth - 10
			);
		};

		track.addEventListener("scroll", check, { passive: true });
		window.addEventListener("resize", check);
		return () => {
			track.removeEventListener("scroll", check);
			window.removeEventListener("resize", check);
		};
	}, []);

	const scroll = (dir) => {
		const track = trackRef.current;
		if (!track) return;
		track.scrollBy({
			left: dir === "right" ? cardWidth + 24 : -(cardWidth + 24),
			behavior: "smooth",
		});
	};

	return (
		<Wrapper>
			<TrackWrapper>
				<Track ref={trackRef} $startPadding={startPadding}>
					{children}
					{/* Spacer ensures last card stops at the content boundary */}
					<EndSpacer $startPadding={startPadding} />
				</Track>
				<FadeRight />
			</TrackWrapper>
			<Controls $startPadding={startPadding}>
				<NavBtn
					onClick={() => scroll("left")}
					disabled={!canScrollLeft}
					aria-label="Zurück"
				>
					<FaChevronLeft />
				</NavBtn>
				<NavBtn
					onClick={() => scroll("right")}
					disabled={!canScrollRight}
					aria-label="Weiter"
				>
					<FaChevronRight />
				</NavBtn>
			</Controls>
		</Wrapper>
	);
};

export default Slider;

const Wrapper = styled.div`
	width: 100%;
	position: relative;
`;

const TrackWrapper = styled.div`
	position: relative;
	/* Allow overflow to the right so cards peek past content edge */
	overflow: visible;
`;

const Track = styled.div`
	display: flex;
	gap: 1.5rem;
	overflow-x: auto;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: none;
	padding-bottom: 4px;
	/* Align first card with content area */
	padding-left: ${(props) => props.$startPadding || "0"};

	@media (max-width: 768px) {
		padding-left: 1.5rem;
	}

	&::-webkit-scrollbar {
		display: none;
	}
`;

const EndSpacer = styled.div`
	flex-shrink: 0;
	width: ${(props) => props.$startPadding || "4rem"};

	@media (max-width: 768px) {
		width: 1.5rem;
	}
`;

const FadeRight = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	width: 100px;
	height: 100%;
	background: linear-gradient(to left, ${(props) => props.theme.bg}, transparent);
	pointer-events: none;
`;

const Controls = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 0.5rem;
	margin-top: 1.5rem;
	padding-right: ${(props) => props.$startPadding || "4rem"};

	@media (max-width: 768px) {
		padding-right: 1.5rem;
	}
`;

const NavBtn = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.borderCard};
	background: ${(props) => props.theme.bgCard};
	color: ${(props) =>
		props.disabled ? props.theme.textMuted : props.theme.text};
	cursor: ${(props) => (props.disabled ? "default" : "pointer")};
	font-size: 0.8rem;
	transition: all 0.2s ease;

	&:not(:disabled):hover {
		background: ${(props) => props.theme.bgCardHover};
		border-color: ${(props) => props.theme.borderCardHover};
	}
`;
