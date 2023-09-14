import CardBase from "@atoms/CardBase";

const PortfolioCard = () => {
    return ( 
        <CardBase>
            <Link href="/" className="portfolioPreview" key={portfolio.id}>
            <div className="portfolioImage"></div>
                <h3 className="portfolioName">Portfolio Title</h3>
                <p className="portfolioCategory">Category: {portfolio.category}</p>
            </Link>
        </CardBase>
     );
}
 
export default PortfolioCard;