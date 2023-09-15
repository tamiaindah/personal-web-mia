import React from "react";
import HeroBanner from "../components/HeroBanner";
import HighlightPortoSection from "../components/HighlightPortoSection";
import EmailSection from "../components/Marquee";
import Navbar from "../components/Navbar";
import PortfolioSection from "../components/PortfolioSection";
import s from "./styles.module.scss";

const Home = () => {
	return (
		<div className={s.wrapper}>
			<Navbar />
			<div className={s.container}>
				
				<HeroBanner />
				
			</div>

			<EmailSection />
			<HighlightPortoSection />
			<PortfolioSection />
		</div>
	);
};

export default Home;
