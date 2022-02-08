import React, { FC } from 'react';

import type { IButton } from './types';

import { StyledButton } from './styled';

const Button: FC<IButton> = ({
  fluid = false,
  asWrapper = false,
  disabled = false,
  onClick,
  children,
  padding,
  minWidth,
  maxHeight,
  type = 'button',
  bgColor,
  borderColor,
  hoverColor,
  color,
	margin,
  $centered,
  bgDisabledColor,
  borderRadius,
  isTransformUppercase,
}) => (
  <StyledButton
    $centered={$centered}
    $borderColor={borderColor}
    $bgColor={bgColor}
    $fluid={fluid}
    $asWrapper={asWrapper}
    $padding={padding}
    $minWidth={minWidth}
    $maxHeight={maxHeight}
    $hoverColor={hoverColor}
    $color={color}
    type={type}
    disabled={disabled}
    onClick={onClick}
    $borderRadius={borderRadius}
    $bgDisabledColor={bgDisabledColor}
		$margin={margin}
    isTransformUppercase={isTransformUppercase}
  >
    {children}
  </StyledButton>
);

export default Button;
