import s from "./Icon.module.scss";
import Icons from "./Icons";

/**
 * @typedef {Object} arguments
 * @property {import("typescript/types").IconType} iconName
 * @property {number} [size]
 * @property {number} [width]
 * @property {number} [height]
 * @property {string} [color]
 * @property {string} [className]
 */
/**
 * @param {arguments} param
 */
const Icon = ({
	iconName,
	size = 20,
	color = "inherit",
	width = size,
	height = size,
	className = "",
}) => {
	return (
		<div
			className={[s._Wrapper, className].join(" ")}
			style={{
				color,
				width: width,
				height: height,
			}}
		>
			{Icons[iconName]}
		</div>
	);
};

export default Icon;
