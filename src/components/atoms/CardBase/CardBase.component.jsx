import s from "./CardBase.module.scss";

/**
 * @param {import("react").HTMLAttributes<HTMLDivElement>} param
 */
const CardBase = ({ className, children, ...rest }) => {
	return (
		<div {...rest} className={`${s._Wrapper} ${className}`}>
			{children}
		</div>
	);
};

export default CardBase;