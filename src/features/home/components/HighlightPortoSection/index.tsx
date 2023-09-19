import PortfolioSlider from "@molecules/PortfolioSlider/PortfolioSlider.component";
import s from "../../view/styles.module.scss";

const HighlightPortoSection = () => {
	return (
		<div className={s.highlightPorto}>
			<div className={s.container}>
				<div className={s.wrapperHighlight}>
					<div className={s.HighlightTitle}>
						<span>Lorem Ipsum</span>
						<h3>My Highlight Portfolio</h3>

						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
						</p>
					</div>
					<div className={s.HighlightColumn}>
						<PortfolioSlider></PortfolioSlider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HighlightPortoSection;
