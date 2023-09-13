import React from "react";
import HeroBanner from "../components/HeroBanner";
import s from "./styles.module.scss";

const Home = () => {
	return (
		<div className={s.wrapper}>
			<div className={s.container}>
				<HeroBanner />
			</div>
		</div>
	);
};

export default Home;
