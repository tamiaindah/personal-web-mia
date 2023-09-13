import Button from "@atoms/Button/Button.component";
import s from "../../view/styles.module.scss";

const HeroBanner = () => {
	return (
		<div className={s.banner}>
			<div className={s.bannerTitle}>
				<h1>Lorem ipsum dolor sit amet consectetur</h1>
			</div>
			<span className={s.bannerHi}>hi i’m Mia, nice to meet ya!</span>

			
			<Button>ABOUT ME</Button>
		</div>
	);
};

export default HeroBanner;
