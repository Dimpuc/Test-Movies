type ButtonType = "button" | "reset" | "submit";

interface Action {
	payload: undefined;
	type: string;
}

export interface IButton {
	fluid?: boolean;
	asWrapper?: boolean;
	disabled?: boolean;
	onClick?: () => void | Promise<void> | Promise<boolean> | Action;
	padding?: string;
	minWidth?: string;
	maxHeight?: string;
	bgColor?: string;
	bgDisabledColor?: string;
	borderColor?: string;
	hoverColor?: string;
	type?: ButtonType;
	color?: string;
	$centered?: boolean;
	borderRadius?: string;
	margin?: string;
	isTransformUppercase?: boolean
}
