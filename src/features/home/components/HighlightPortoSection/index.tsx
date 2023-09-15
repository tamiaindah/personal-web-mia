import PortfolioCard from "@molecules/PortfolioCard/PortfolioCard.component";
import React from "react";
import s from "../../view/styles.module.scss";


const HighlightPortoSection = () => {
    return ( 
        <div className={s.highlightPorto}>
            <div className={s.container}>
            <span>Lorem Ipsum</span>
            <h3>Lorem ipsum dolor sit amet</h3>
            <div className={s.wrapperHighlight}>
            <PortfolioCard></PortfolioCard>
            </div>
            </div>
        </div>
     );
}
 
export default HighlightPortoSection;