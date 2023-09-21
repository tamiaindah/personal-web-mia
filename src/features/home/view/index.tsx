import About from "../components/About";
import HeroBanner from "../components/HeroBanner";
import HighlightPortoSection from "../components/HighlightPortoSection";
import EmailSection from "../components/Marquee";
import PortfolioSection from "../components/PortfolioSection";
import s from "./styles.module.scss";

const Home = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<HeroBanner />
			</div>
			<EmailSection />
			<About />

			<HighlightPortoSection />
			<PortfolioSection />
		</div>
	);
};

export default Home;
