'use client'

import { theme } from '@/styles/theme'
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
    backgroundColor: alpha(theme.palette.background.default, 0.7),
    backdropFilter: 'blur(10px)',
  },
}))

export const MUIMenuDrawerContent = styled(Box)(() => ({
  padding: '2rem',
  position: 'relative',
  width: '80vw',
  maxWidth: '400px',
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
