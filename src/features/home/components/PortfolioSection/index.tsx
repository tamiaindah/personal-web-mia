import PortfolioCard from "@molecules/PortfolioCard/PortfolioCard.component";
import s from "../../view/styles.module.scss";

const PortfolioSection = () => {
	return (
		<div className={s.portfolioSection}>
			<div className={s.container}>
				<span>Current Portfolios</span>
				<h3>Lorem ipsum dolor sit amet</h3>
				<div className={s.PortfolioList}>
					<PortfolioCard slug="1" />
					<PortfolioCard slug="2" />
					<PortfolioCard slug="3" />
				</div>
			</div>
		</div>
	);
};

export default PortfolioSection;
