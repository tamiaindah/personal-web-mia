import PortfolioCard from "@molecules/PortfolioCard/PortfolioCard.component";
import React from "react";
import s from "../../view/styles.module.scss";

const PortfolioSection = () => {
	return (
		<div className={s.portfolioSection}>
            <div className={s.container}>
            <span>Current Portfolios</span>
            <h3>Best of the best of my portfolios</h3>
			<div className={s.WrapperList}>
                <PortfolioCard></PortfolioCard>
            </div>
            </div>
            
		</div>
	);
};

export default PortfolioSection;
