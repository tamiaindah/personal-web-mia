import React from "react";
import HeroBanner from "../components/HeroBanner";
import EmailSection from "../components/Marquee";
import Navbar from "../components/Navbar";
import s from "./styles.module.scss";

const Home = () => {
	return (
		<div className={s.wrapper}>
			<Navbar />
			<div className={s.container}>
				
				<HeroBanner />
				
			</div>

			<EmailSection />
		</div>
	);
};

export default Home;
