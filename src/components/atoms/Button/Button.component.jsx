import Icon from "@atoms/Icon";
import clsx from "clsx";
import s from "./Button.module.scss";

/**
 * @param {import("typescript/interface").IButtonProps} param
 */
const Button = ({
	iconLeft,
	iconRight,
	iconLeftSize,
	iconRightSize,
	children,
	size = "regular",
	variant = "fill",
	className,
	fullWidth,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={clsx(
				s._button,
				"button-2",
				`${s[`_${size}`]} ${s[`_${variant}`]} `,
				className,
				fullWidth && s._FullWidth,
			)}
		>
			{iconLeft && <Icon size={iconLeftSize} iconName={iconLeft} color="inherit" />}
			{children}
			{iconRight && <Icon size={iconRightSize} iconName={iconRight} color="inherit" />}
		</button>
	);
};

export default Button;
