import Image from "next/image";
import s from "../../view/styles.module.scss";

const About = () => {
	return (
		<div className={s.AboutSection}>
			<div className={s.AboutWrapper}>
				<div className={s.ImageWrapper}>
					<Image
						width={2560}
						height={1200}
						src="/images/mines/HeroBanner.webp"
						alt="Hero banner"
						priority
						loading="eager"
					/>
				</div>
				<div className={s.summaryWrapper}>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</span>
				</div>
			</div>
		</div>
	);
};

export default About;
