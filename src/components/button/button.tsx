import React, { ReactNode } from "react"
import styled from "styled-components"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/** Button label */
	children?: ReactNode
	/**
	 * Button default colors variations
	 * @param {string=} colorPrimary defaultValue="yellow" - Define Optional buttonPrimary color param for your button or it will use the "yellow" default value
	 * */
	colorPrimary?: string
	/**
	 * Button default colors variations
	 * @param {string=} colorDark defaultValue="black" - Define Optional dark color param for your button or it will use the "black" default value
	 * */
	colorDark?: string
	/**
	 * Button default colors variations
	 * @param {string=} colorNeutral defaultValue="rgb(170, 170, 170)" - Define Optional neutral color param for your button or it will use the "rgb(170, 170, 170)" default value
	 * */
	colorNeutral?: string
	/**
	 * Button default colors variations
	 * @param {string=} colorLight defaultValue="white" - Define Optional light color param for your button or it will use the "white" default value
	 * */
	colorLight?: string
	/**
	 * Button paddings variations
	 * @param {string=} buttonPaddingsNormal defaultValue="15px 25px" - Define Optional button normal padding param for your button or it will use these default values "15px 25px"
	 * */
	buttonPaddingsNormal?: string
	/**
	 * Button paddings variations
	 * @param {string=} buttonPaddingsbuttonLarge defaultValue="15px 80px" - Define Optional button buttonLarge padding param for your button or it will use these default values "15px 80px"
	 * */
	buttonPaddingsbuttonLarge?: string
	/**
	 * Button variations
	 * @param {boolean=} buttonPrimary defaultValue="false" - Add buttonPrimary prop into the button if you want override de default Button
	 * */
	buttonPrimary?: boolean
	/**
	 * Button variations
	 * @param {boolean=} buttonLarge defaultValue="false" - Add buttonLarge prop into the button if you want your button use the buttonPaddingsbuttonLarge props instead of buttonPaddingsNormal or its normal paddings default values
	 * */
	buttonLarge?: boolean
	/**
	 * Button text-transform variations
	 * @param {boolean=} fontUppercased defaultValue="false" - Add fontUppercased prop into the button if you want your button use the fontUppercased text-transform value instead of normal case
	 * */
	fontUppercased?: boolean
	/**
	 * Button font-weight variations
	 * @param {boolean=} fontBolded defaultValue="false" - Add fontBolded prop into the button if you want your button use the bold font-weight value instead of normal weight
	 * */
	fontBolded?: boolean
	/**
	 * Button border-radius variations
	 * @param {boolean=} buttonRounded defaultValue="false" - Add buttonRounded prop into the button if you want your button use the 26px as border-radius value instead of 0
	 * */
	buttonRounded?: boolean
	/**
	 * Button buttonDisabled variations
	 * @param {boolean=} buttonDisabled defaultValue="false" - Add buttonDisabled prop into the button if you want your button use the buttonDisabled appearance instead of the default appearance
	 * */
	buttonDisabled?: boolean
}
/**
 * Button Documentation.
 *
 * @author [Thomas Maulon](https://github.com/tmaulon)
 * @version 1.0.1
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
	const {
		colorPrimary,
		colorDark,
		colorNeutral,
		colorLight,
		buttonPaddingsNormal,
		buttonPaddingsbuttonLarge,
		buttonPrimary,
		buttonLarge,
		fontUppercased,
		fontBolded,
		buttonRounded,
		buttonDisabled,
		children,
	} = props
	return (
		<StyledButton
			colorPrimary={colorPrimary}
			colorDark={colorDark}
			colorNeutral={colorNeutral}
			colorLight={colorLight}
			buttonPaddingsNormal={buttonPaddingsNormal}
			buttonPaddingsbuttonLarge={buttonPaddingsbuttonLarge}
			buttonPrimary={buttonPrimary}
			buttonLarge={buttonLarge}
			fontUppercased={fontUppercased}
			fontBolded={fontBolded}
			buttonRounded={buttonRounded}
			buttonDisabled={buttonDisabled}
			ref={ref}
			{...props}
		>
			{children}
		</StyledButton>
	)
})
const defaultButtonColors = {
	colorPrimary: "yellow",
	colorDark: "black",
	colorNeutral: "rgb(170, 170, 170)",
	colorLight: "white",
}

const defaultButtonPaddings = {
	normal: "15px 25px",
	buttonLarge: "15px 80px",
}

const StyledButton = styled.button<ButtonProps>`
	-webkit-appearance: none;
	appearance: none;
	white-space: nowrap;
	overflow: hidden;
	border: none;
	background: none;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	width: fit-content;
	background-color: ${(props) =>
		props.buttonDisabled
			? props.colorDark
				? props.colorDark
				: defaultButtonColors.colorDark
			: props.buttonPrimary
			? props.colorPrimary
				? props.colorPrimary
				: defaultButtonColors.colorPrimary
			: props.colorLight
			? props.colorLight
			: defaultButtonColors.colorLight};
	color: ${(props) =>
		props.buttonDisabled
			? props.colorNeutral
				? props.colorNeutral
				: defaultButtonColors.colorNeutral
			: props.buttonPrimary
			? props.colorDark
				? props.colorDark
				: defaultButtonColors.colorDark
			: props.colorDark
			? props.colorDark
			: defaultButtonColors.colorDark};
	border-color: ${(props) =>
		props.buttonDisabled
			? props.colorNeutral
				? props.colorNeutral
				: defaultButtonColors.colorNeutral
			: props.buttonPrimary
			? props.colorPrimary
				? props.colorPrimary
				: defaultButtonColors.colorPrimary
			: "transparent"};
	border-width: 2px;
	border-style: solid;
	border-radius: ${(props) => (props.buttonRounded ? "26px" : "")};
	padding: ${(props) => (props.buttonLarge ? defaultButtonPaddings.buttonLarge : defaultButtonPaddings.normal)};
	text-transform: ${(props) => (props.fontUppercased ? "uppercase" : "")};
	box-shadow: ${(props) => (props.buttonPrimary ? "0 2px 5px 0 rgba(0, 0, 0, 0.15)" : "")};
	font-weight: ${(props) => (props.fontBolded ? "700" : "400")};
	font-size: 1rem;
	transition-property: background-color, color, border-color, box-shadow;
	transition-duration: 0.3s;
	transition-timing-function: linear;

	&:hover {
		cursor: ${(props) => (!props.buttonDisabled ? "pointer" : "not-allowed")};
		background-color: ${(props) =>
			props.buttonPrimary
				? props.colorDark
					? props.colorDark
					: defaultButtonColors.colorDark
				: !props.buttonDisabled
				? props.colorLight
					? props.colorLight
					: defaultButtonColors.colorLight
				: ""};
		color: ${(props) =>
			props.buttonPrimary
				? props.colorLight
					? props.colorLight
					: defaultButtonColors.colorLight
				: !props.buttonDisabled
				? props.colorDark
					? props.colorDark
					: defaultButtonColors.colorDark
				: ""};
		border-color: ${(props) =>
			props.buttonPrimary
				? props.colorDark
					? props.colorDark
					: defaultButtonColors.colorDark
				: !props.buttonDisabled
				? props.colorDark
					? props.colorDark
					: defaultButtonColors.colorDark
				: ""};
		box-shadow: ${(props) => (props.buttonPrimary ? "0 2px 15px 0 rgba(0, 0, 0, 0.35)" : "")};
	}

	&:focus,
	&:focus-within {
		// remove blue default browser shadow
		background-image: none;
		outline: 0;
		box-shadow: none;
		// apply style
		background-color: ${(props) =>
			props.buttonPrimary
				? props.colorLight
					? props.colorLight
					: defaultButtonColors.colorLight
				: !props.buttonDisabled
				? props.colorLight
					? props.colorLight
					: defaultButtonColors.colorLight
				: ""};
		color: ${(props) =>
			props.buttonPrimary
				? props.colorDark
					? props.colorDark
					: defaultButtonColors.colorDark
				: !props.buttonDisabled
				? props.colorDark
					? props.colorDark
					: defaultButtonColors.colorDark
				: ""};
		border-color: ${(props) =>
			props.buttonPrimary
				? props.colorDark
					? props.colorDark
					: defaultButtonColors.colorDark
				: !props.buttonDisabled
				? props.colorDark
					? props.colorDark
					: defaultButtonColors.colorDark
				: ""};
		box-shadow: ${(props) => (props.buttonPrimary ? "0 2px 15px 0 rgba(0, 0, 0, 0.35)" : "")};
	}
`
