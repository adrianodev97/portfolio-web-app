'use client'

import { styled, Typography } from '@mui/material'

export const MUIStyledNav = styled('nav')(({ theme }) => ({
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

export const MUIStyledList = styled('ul')(() => ({
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',

  li: {
    minWidth: '85px',
    textAlign: 'center',
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
  }),
)
