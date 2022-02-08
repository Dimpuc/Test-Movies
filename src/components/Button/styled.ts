import styled from "styled-components";
import colors from "../../static/colors";

export const StyledButton = styled.button<{
	$asWrapper?: boolean;
	$fluid?: boolean;
	$padding?: string;
	$minWidth?: string;
	$bgColor?: string;
	$borderColor?: string;
	$hoverColor?: string;
	$color?: string;
	$centered?: boolean;
	$bgDisabledColor?: string;
	$borderRadius?: string;
	$margin?: string;
	isTransformUppercase?: boolean;
	$maxHeight?: string;
}>`
	appearance: none;
	background-color: ${({ $bgColor }) => $bgColor || colors.orangeLight};
	color: ${({ $color }) => $color || colors.white};
	display: flex;
	border: none;
	border: ${({ $borderColor }) =>
		$borderColor ? `1px solid ${$borderColor}` : "1px solid transparent"};
	border-radius: ${({ $borderRadius }) => $borderRadius || "10px"};
	font-family: Inter;
	font-style: normal;
	font-weight: bold;
	font-size: 13px;
	line-height: 120%;
	text-align: center;
	min-width: ${({ $minWidth }) => $minWidth};
	max-height: ${({ $maxHeight }) => $maxHeight} !important;
	letter-spacing: 0.04em;
	text-transform: ${({ isTransformUppercase }) => !isTransformUppercase && "uppercase" };
	cursor: pointer;
	padding: ${({ $padding }) => $padding ?? "16px 15px 17px 17px"};
	${({ $centered }) => $centered && { margin: "0 auto" }}
	justify-content: center;
	align-items: center;
	transition: background-color 0.3s ease-in-out;
	margin: ${({ $margin }) => $margin};
`;
