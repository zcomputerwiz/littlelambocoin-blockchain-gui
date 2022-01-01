import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as LittleLamboCoinIcon } from './images/littlelambocoin.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={LittleLamboCoinIcon} viewBox="0 0 150 58" {...props} />;
}
