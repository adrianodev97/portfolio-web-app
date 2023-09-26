'use client'

import { styled, IconButton, Box, Drawer, alpha } from '@mui/material'

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
}))

export const MUIMenuDrawerLogoContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}))
