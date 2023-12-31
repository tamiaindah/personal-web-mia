import CardBase from "@atoms/CardBase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import s from "./PortfolioCard.module.scss";

interface IPortfolioCardProps {
	className?: string;
	slug: string;
}

const PortfolioCard = ({ className = "cardContainer", slug }: IPortfolioCardProps) => {
	const router = useRouter();
	const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		router.push(`/portfolio/${slug}`);
	};

	return (
		<Link href={`/portfolio/${slug}`} onClick={handleClick} className={s.cardLink}>
			<CardBase className={className}>
				<div className={s._imageContainer}>
					<Image
						width={1000}
						height={250}
						src="/images/projects/chezjem/card-thumbnail.png"
						alt="card-thumbnail"
						priority
						loading="eager"
						className="_Image"
					/>
				</div>
				<div className={s._portfolioDetails}>
					<p className={s._portfolioCategory}>Website</p>
					<h3 className={s._portfolioName}>Chezjem</h3>

					<div className={s.toolsWrapper}>
						<span>Tools :</span>
						<span>css, js, html</span>
					</div>
				</div>
			</CardBase>
		</Link>
	);
};

export default PortfolioCard;
