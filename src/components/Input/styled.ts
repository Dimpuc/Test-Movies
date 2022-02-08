import styled from "styled-components";
import colors from "../../static/colors";

import { InputSize } from "../../types/enum";

export interface InputPropsStyles {
  $error?: boolean;
  $capitalized?: boolean;
  disabled?: boolean;
  $borderColor?: string;
  $color?: string;
  $focusColor?: string;
  $focusWidth?: string;
  $placeholderColor?: string;
  $placeholderOpacity?: number;
  $padding?: string;
  $isQuestionInput?: boolean;
  isSearch?: boolean;
}

export interface WrapperProps {
  $width?: string;
  $small?: string;
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  ${({ $width }) => ($width ? { width: $width } : { width: "100%" })};
  padding-top: 1px;
  padding-bottom: 1px;
  padding-left: ${({ $small }) =>
    $small === InputSize.right || $small === InputSize.both ? "0px" : "24px"};
  padding-right: ${({ $small }) =>
    $small === InputSize.left || $small === InputSize.both ? "0px" : "24px"};
`;
export const InputStyle = styled.input<InputPropsStyles>`
  margin-top: 3px;
  display: block;
  position: relative;
  background: ${colors.white};
  border: 2px solid
    ${({ $borderColor }) =>
      $borderColor ? colors.grayLight : colors.grayTabTitle};
  width: 100%;
  outline: none;
  text-transform: ${({ $capitalized }) =>
    $capitalized ? "capitalize" : "unset"};
  opacity: ${({ disabled }) => (disabled ? "0.8" : "1")};
  padding: ${({ $padding }) => $padding ?? "10px 0px 10px 16px"};
  box-sizing: border-box;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;
  border-style: solid;

  color: ${colors.grayStandart};
  transition: box-shadow 0.2s ease-in-out;
  ${({ $error }) => $error && { border: `2px solid red` }}
  &::placeholder {
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 160%;
    ${({ $placeholderOpacity }) =>
      $placeholderOpacity && { opacity: $placeholderOpacity }}
    color: ${({ $isQuestionInput }) =>
      $isQuestionInput ? colors.dark : colors.grayStandart};
  }
  &:hover {
    ${({ disabled }) => !disabled && { border: `2px solid #333;` }}
  }
  &:focus {
    outline: none;
    color: ${colors.dark};
  }
  &:focus ~ label,
  &:not(:focus):valid ~ label {
    top: -5px;
    font-size: 15px;
  }
  &:not(:invalid) ~ label {
    top: -5px;
    font-size: 15px;
  }
  &::-webkit-input-placeholder {
    font-family: "Inter", sans-serif;
    opacity: ${({ $placeholderOpacity }) => $placeholderOpacity ?? 1};
    transition: opacity 0.3s ease;
  }
  &::-moz-placeholder {
    font-family: "Inter", sans-serif;
    opacity: ${({ $placeholderOpacity }) => $placeholderOpacity ?? 1};
    transition: opacity 0.3s ease;
  }
  &:-moz-placeholder {
    font-family: "Inter", sans-serif;
    opacity: ${({ $placeholderOpacity }) => $placeholderOpacity ?? 1};
    transition: opacity 0.3s ease;
  }
  &:-ms-input-placeholder {
    font-family: "Inter", sans-serif;
    opacity: ${({ $placeholderOpacity }) => $placeholderOpacity ?? 1};
    transition: opacity 0.3s ease;
  }
  &:focus::-webkit-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus::-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus:-moz-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  &:focus:-ms-input-placeholder {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
`;

export const Label = styled.label`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: ${colors.grayTabTitle};
  position: absolute;
  pointer-events: none;
  opacity: 0.8;
  left: 5px;
  top: -20px;
`;
