import { socialMediaLinks } from "@utils/socialMediaLinks";
import Image from "next/image";
import Link from "next/link";
import s from "../../view/styles.module.scss";

// const handleClick = () => {
//   console.log("hello, mia");
// };

const Navbar = () => {
	return (
		<nav className={s.navbar}>
			<div className={s.container}>
				<div className={s.navbarSection}>
					<div className={s.burger}>
						<Link href="/">
							<Image
								width={42}
								height={42}
								src="/images/icons/bar-dark.svg"
								alt="Navbar-icon"
								priority
								loading="eager"
								className="burger__trigger"
							/>
						</Link>
					</div>
					<div className={s.links}>
						<Link href={socialMediaLinks.github} target="_blank" title="Github">
							github
						</Link>
						<Link href={socialMediaLinks.dribbble} target="_blank" title="Dribbble">
							dribbble
						</Link>
						<Link href={socialMediaLinks.linkedin} target="_blank" title="Linkedin">
							linkedin
						</Link>
					</div>
					<div className={s.logo}>
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
			</div>
		</nav>
	);
};

export default Navbar;
