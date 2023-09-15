import Button from "@atoms/Button/Button.component";
import s from "../../view/styles.module.scss";

const HeroBanner = () => {
	return (
		<div className={s.banner}>
			<div className={s.bannerTitle}>
				<h1>LOREM IPSUM
					<span>HIRE ME!</span>
				</h1>
				
			</div>
			<span className={s.bannerHi}>Lorem ipsum ndolor sit amet, consectetur adipiscing elit</span>

			
			<Button>ABOUT ME</Button>
		</div>
	);
};

export default HeroBanner;
