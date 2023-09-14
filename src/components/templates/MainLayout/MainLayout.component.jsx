const Footer = dynamic(() => import("@organisms/Footer"), {
	ssr: false,
});
import Header from "@organisms/Header";
import dynamic from "next/dynamic";
import s from "./MainLayout.module.scss";

/**
 * @typedef {Object} args
 * @property {import("react").ReactNode} children
 * @param {args} param
 * @returns
 */
const MainLayout = ({ children }) => {
	return (
		<div className={s._Wrapper}>
			<Header />
			<main className={s._Main}>{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
