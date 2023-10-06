'use client'

import { styled, Toolbar, Typography } from '@mui/material'

export const MUIStyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0 !important',
}))

export const MUIStyledLogo = styled(Typography)(({ theme }) => ({
  a: {
    display: 'flex',
    gap: '.3rem',
    color: theme.palette.text.primary,
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    lineHeight: theme.typography.body1.lineHeight,
  },
  [theme.breakpoints.down('md')]: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
  },
}))

export const MUIStyledLogoText = styled('span')(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: 600,
}))

export const MUIStyledNav = styled('nav')(() => ({
  flexGrow: 1,
}))

export const MUIStyledList = styled('ul')(() => ({
  display: 'flex',
  gap: '2rem',
  justifyContent: 'center',
}))
