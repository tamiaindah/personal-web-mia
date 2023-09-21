const Footer = dynamic(() => import("@organisms/Footer"), {
	ssr: false,
});
import Header from "@organisms/Header";
import dynamic from "next/dynamic";
import { ReactNode } from "react";
import s from "./MainLayout.module.scss";

interface IMainLayoutProps {
	children: ReactNode;
}

const MainLayout = ({ children }: IMainLayoutProps) => {
	return (
		<div className={s._Wrapper}>
			<Header />
			<main className={s._Main}>{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
