import type { ChangeEvent, HTMLAttributes, FocusEvent } from "react";

export interface InputProps extends IInput {
	register?: any;
	name: string;
	type?: string;
	autoFocus?: boolean;
	id?: string;
	label?: string;
	$focusColor?: string;
	$borderColor?: string;
	$color?: string;
	$focusWidth?: string;
	$placeholderColor?: string;
	$placeholderOpacity?: number;
	$padding?: string;
	autoComplete?: boolean;
	required?: boolean;
	disabled?: boolean;
	readOnly?: boolean;
	width?: string;
	value?: string | number;
	onClick?: () => void;
	maxLength?: number;
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	defaultValue?: string;
	$capitalized?: boolean;
	small?: string;
	onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
	labelForInput?: string;
	inputMode?: HTMLAttributes<HTMLLIElement>["inputMode"];
	isQuestionInput?: boolean;
	maxWidth?: string;
	isSearch?: boolean;
}
