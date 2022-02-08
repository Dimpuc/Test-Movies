import React, { FC } from "react";

import ErrorMessage from "../ErrorMessage";

import type { InputProps } from "./types";

import { InputStyle, Wrapper, Label } from "./styled";

const Input: FC<InputProps> = ({
  register,
  onClick,
  onChange,
  onBlur,
  onFocus,
  name,
  type,
  errors,
  label,
  required,
  disabled,
  readOnly,
  width,
  value,
  id,
  maxLength,
  autoFocus,
  autoComplete = false,
  $capitalized,
  small = "both",
  labelForInput,
  inputMode,
  $borderColor,
  $color,
  $focusColor,
  $focusWidth,
  $placeholderColor,
  $placeholderOpacity,
  $padding,
  isSearch,
  isQuestionInput,
}) => {
  return (
    <Wrapper onClick={onClick} $width={width} $small={small}>
      {labelForInput && <Label htmlFor={id}> {labelForInput} </Label>}
      <InputStyle
        {...register(name, {
          onChange,
          onBlur,
        })}
        name={name}
        type={type}
        id={id}
        $borderColor={$borderColor}
        $color={$color}
        $focusColor={$focusColor}
        $focusWidth={$focusWidth}
        $placeholderColor={$placeholderColor}
        $placeholderOpacity={$placeholderOpacity}
        $padding={$padding}
        $error={errors && !!errors[name]}
        required={required}
        isSearch={isSearch}
        disabled={disabled}
        readOnly={readOnly}
        value={value}
        autoFocus={autoFocus}
        maxLength={maxLength}
        placeholder={label}
        onFocus={onFocus}
        $capitalized={$capitalized}
        inputMode={inputMode}
        autoComplete={autoComplete ? "on" : "off"}
        $isQuestionInput={isQuestionInput}
      />
      {errors?.[name]?.message && (
        <ErrorMessage message={errors[name].message} />
      )}
    </Wrapper>
  );
};

export default Input;