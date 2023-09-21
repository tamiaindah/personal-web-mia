import Image from "next/image";
import Link from "next/link";
import s from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={s.Footer__Wrapper}>
			<div className="Footer__section-1">
				<div className="Footer__column-1">
					<div className="Footer__menu"></div>
				</div>
				<div className="Footer__column-2">
					<div className="Footer__socmed"></div>
				</div>
				<div className="Footer__column-3">
					<div className="Footer__quotes"></div>
				</div>
			</div>
			<div className="Footer__section-2">
				<div className="Footer__column-1">
					<div className="Footer__logo">
						<Link href="/">
							<Image
								width={81}
								height={42}
								src="/images/logos/logo-dark.svg"
								alt="Mia-logo"
								title="Personal Website Mia"
								priority
								loading="eager"
							/>
						</Link>
					</div>
				</div>
				<div className="Footer__column-2">
					<div className="Footer__copyright"></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
