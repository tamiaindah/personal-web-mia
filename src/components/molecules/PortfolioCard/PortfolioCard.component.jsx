import CardBase from "@atoms/CardBase";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import s from "./PortfolioCard.module.scss";


/**
 * @param {import("./interface").ICarCardProps} param
 */

const PortfolioCard = ({
	images,
	className = "cardContainer",
	portfolioName ="Chezjem",
    portfolioCategory ="",
	slug,
}) => {
	const router = useRouter();
	const handleClick = (e) => {
		e.preventDefault();
		router.push(`/car/${slug}`);
	};

    return ( 
        
        <Link href={`/car/${slug}`} onClick={handleClick} className={s.cardLink} >
            <CardBase className={className}>
            <div className={s._imageContainer}>
                    <Image
                        width={300}
                        height={250}
                        src="/images/projects/chezjem/card-thumbnail.png"
                        alt="card-thumbnail"
                        priority
                        loading="eager"
                        className="_Image"
                    />
                </div>
                <div className={s._portfolioDetails}>
                    <h3 className={s._portfolioName}>Chezjem</h3>
                    <p className={s._portfolioCategory}>Website</p>
                </div>
            </CardBase>
        </Link>
        

        
        
     );
};
 
export default PortfolioCard;