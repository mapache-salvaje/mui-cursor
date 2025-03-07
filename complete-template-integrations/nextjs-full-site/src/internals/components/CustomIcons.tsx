import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { SvgIconProps } from '@mui/material';

export function IndiaFlag(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect width="24" height="8" fill="#FF9933"/>
      <rect y="8" width="24" height="8" fill="#FFFFFF"/>
      <rect y="16" width="24" height="8" fill="#138808"/>
      <circle cx="12" cy="12" r="3" fill="#000080"/>
    </SvgIcon>
  );
}

export function UsaFlag(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect width="24" height="24" fill="#FFFFFF"/>
      <rect width="24" height="2" fill="#B22234" y="0"/>
      <rect width="24" height="2" fill="#B22234" y="4"/>
      <rect width="24" height="2" fill="#B22234" y="8"/>
      <rect width="24" height="2" fill="#B22234" y="12"/>
      <rect width="24" height="2" fill="#B22234" y="16"/>
      <rect width="24" height="2" fill="#B22234" y="20"/>
      <rect width="10" height="12" fill="#3C3B6E"/>
    </SvgIcon>
  );
}

export function BrazilFlag(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect width="24" height="24" fill="#009C3B"/>
      <path d="M12 4L20 12L12 20L4 12L12 4Z" fill="#FEE000"/>
      <circle cx="12" cy="12" r="4" fill="#002776"/>
    </SvgIcon>
  );
}

export function SpainFlag(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect width="24" height="6" y="0" fill="#AA151B"/>
      <rect width="24" height="12" y="6" fill="#F1BF00"/>
      <rect width="24" height="6" y="18" fill="#AA151B"/>
    </SvgIcon>
  );
}

export function UkFlag(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect width="24" height="24" fill="#012169"/>
      <path d="M0 0L24 24M24 0L0 24" stroke="#FFFFFF" strokeWidth="4"/>
      <path d="M12 0V24M0 12H24" stroke="#FFFFFF" strokeWidth="4"/>
      <path d="M12 0V24M0 12H24" stroke="#C8102E" strokeWidth="2"/>
      <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="2"/>
    </SvgIcon>
  );
}

export function GermanyFlag(props: SvgIconProps) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <rect width="24" height="8" fill="#000000"/>
      <rect y="8" width="24" height="8" fill="#DD0000"/>
      <rect y="16" width="24" height="8" fill="#FFCE00"/>
    </SvgIcon>
  );
} 