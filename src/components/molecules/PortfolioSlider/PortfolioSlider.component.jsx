import Button from "@atoms/Button/Button.component";
import Image from "next/image";
import s from "./PortfolioSlider.module.scss";

const PortfolioSlider = () => {
	return (
		<div className={s.HighlightContainer}>
			<div className={s.Highlight__Title}>
				<h3>2023 Portfolio</h3>
			</div>
			<div className={s.Highlight__imageContainer}>
				<Image
					width={1000}
					height={250}
					src="/images/projects/chezjem/card-thumbnail.png"
					alt="card-thumbnail"
					priority
					loading="eager"
					className="PortfolioImage"
				/>
				<Image
					width={1000}
					height={250}
					src="/images/projects/BBG-thumbnail.jpeg"
					alt="card-thumbnail"
					priority
					loading="eager"
					className="PortfolioImage"
				/>
				<Image
					width={1000}
					height={250}
					src="/images/projects/Body-Cupping-thumbnail.jpeg"
					alt="card-thumbnail"
					priority
					loading="eager"
					className="PortfolioImage"
				/>
				<Image
					width={1000}
					height={250}
					src="/images/projects/Body-switch-thumbnail.jpeg"
					alt="card-thumbnail"
					priority
					loading="eager"
					className="PortfolioImage"
				/>
			</div>
			<div className={s.Highlight__buttonContainer}>
				<Button href="/" id="leftBtn">
					Left
				</Button>
				<Button href="/" id="rightBtn">
					Right
				</Button>
			</div>
		</div>
	);
};

export default PortfolioSlider;
