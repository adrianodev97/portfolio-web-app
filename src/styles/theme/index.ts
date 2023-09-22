'use client'

import { createTheme, alpha } from '@mui/material'
import { palette } from './palette'

export const theme = createTheme({
  palette,
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
