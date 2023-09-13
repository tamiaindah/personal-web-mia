import Image from "next/image";
import Link from "next/link";
import React from "react";
import s from "../../view/styles.module.scss";


const handleClick = () => {
  console.log("hello, mia");
};

const Navbar = () => {
  return (
    <nav className={s.navbar}>
      <div className={s.container}>
        <div className={s.navbarSection}>
          <div className={s.burger}>
          <Link href="/">
            <Image
							width={24}
							height={39}
							src="/images/icons/bar.svg"
							alt="Navbar-icon"
							priority
							loading="eager"
						/>
            </Link>
          </div>
          <div className={s.links}>
            <Link href="mailto: tamiaindah6600@gmail.com">github</Link>
            <Link href="/">dribbble</Link>
            <Link href="/create">linkedin</Link>
          </div>
          <div className={s.logo}>
            <Link href="/">
            <Image
							width={81}
							height={20}
							src="/images/logos/logo.svg"
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
