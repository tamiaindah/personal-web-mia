import PortfolioCard from "@molecules/PortfolioCard/PortfolioCard.component";
import React from "react";
import s from "../../view/styles.module.scss";


const HighlightPortoSection = () => {
    return ( 
        <div className={s.highlightPorto}>
            <div className={s.container}>
            <PortfolioCard></PortfolioCard>
            </div>
        </div>
     );
}
 
export default HighlightPortoSection;