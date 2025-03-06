'use client';

import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

export default function SitemarkIcon() {
  return (
    <SvgIcon sx={{ height: 21, width: 100, mr: 2 }}>
      <path
        d="M0 0h100v21H0z"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 5h60v11H20z"
        fill="currentColor"
        fillOpacity={0.1}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 10h30v1H35zM35 14h30v1H35zM35 18h30v1H35z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
} 