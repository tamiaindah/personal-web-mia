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
				<div className={s.summaryWrapper}></div>
			</div>
		</div>
	);
};

export default About;
