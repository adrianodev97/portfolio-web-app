'use client'

import {
  styled,
  IconButton,
  Box,
  Drawer,
  alpha,
  Typography,
} from '@mui/material'

export const MUIStyledMenuMobileButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}))

export const MUIStyledMenuDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paperAnchorRight': {
    backgroundColor: alpha(theme.palette.background.default, 0.15),
    backdropFilter: 'blur(10px)',
  },
}))

export const MUIMenuDrawerContent = styled(Box)(() => ({
  padding: '1rem 2rem',
  position: 'relative',
  width: '80vw',
  maxWidth: '300px',
}))

export const MUIMenuDrawerLogoContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}))

export const MUIMenuDrawerLogo = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.h4.fontWeight,
  lineHeight: theme.typography.h4.lineHeight,
}))

export const MUIStyledHeaderNavList = styled('ul')(({ theme }) => ({
  flexDirection: 'column',
  alignItems: 'start',
  width: 'fit-content',
  margin: '0 auto',
  padding: theme.spacing(6),
}))

export const MUIStyledHeaderNavItem = styled('li')(() => ({
  a: {
    position: 'relative',
    textDecoration: 'none',
  },
}))

export const MUIStyledHeaderSocialContent = styled('div')<{
  mobileDisplay: string
}>(({ theme, mobileDisplay }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  // gap: theme.customLayout.spacing.xs,
  [theme.breakpoints.down('md')]: {
    display: mobileDisplay,
    // padding: theme.customLayout.spacing.xs,
  },
}))
