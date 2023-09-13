import s from "../../view/styles.module.scss";

const HeroBanner = () => {
	return (
		<div className={s.banner}>
			<div className={s.container}>
				<div className={s.bannerTitle}>
					<h1>not too geeky - but i code and design</h1>
				</div>
				<span className={s.bannerHi}>hi i’m Mia, nice to meet ya!</span>
			</div>
		</div>
	);
};

export default HeroBanner;
