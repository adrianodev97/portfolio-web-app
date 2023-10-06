'use client'

import { theme } from '@/styles/theme'
import { styled, Typography } from '@mui/material'

export const MUIStyledNav = styled('nav')<{ onMobile: boolean }>(
  ({ theme, onMobile }) => ({
    flexGrow: 1,
    [theme.breakpoints.down('md')]: {
      display: onMobile ? 'block' : 'none',
    },
  }),
)

export const MUIStyledList = styled('ul')(() => ({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',

  li: {
    minWidth: '85px',
    textAlign: 'center',
  },

  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: theme.spacing(3),
    paddingTop: theme.spacing(6),
    li: {
      width: '100%',
      minWidth: '100%',
    },
  },
}))

export const MUIStyledLink = styled(Typography)<{ isActive: boolean }>(
  ({ theme, isActive }) => ({
    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: isActive ? 600 : theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
    '&:hover': {
      color: isActive
        ? theme.palette.primary.main
        : theme.palette.text.secondary,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: theme.typography.h5.fontSize,
      lineHeight: theme.typography.h5.lineHeight,
    },
  }),
)
