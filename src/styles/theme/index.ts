'use client'

import { createTheme, alpha } from '@mui/material'
import { palette } from './palette'

export const theme = createTheme({
  palette,
  typography: {
    h1: {
      fontSize: '42px',
      fontWeight: '700',
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '34px',
      fontWeight: '700',
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '28px',
      fontWeight: '700',
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '24px',
      fontWeight: '700',
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '20px',
      fontWeight: '700',
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '18px',
      fontWeight: '700',
      lineHeight: 1.2,
    },
    subtitle1: {
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '24px',
    },
    subtitle2: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '22px',
    },
    body1: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '22px',
    },
    body2: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
    },
    button: {
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '22px',
    },
    caption: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '16px',
    },
    overline: {
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '20px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: palette.background.default,
          boxShadow: `0 1px 0 ${alpha(palette.background.paper, 0.2)}`,
          height: '80px',
          display: 'flex',
          justifyContent: 'center',
          padding: 0,
        },
      },
    },
  },
})
