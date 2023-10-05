'use client'

import { styled, IconButton } from '@mui/material'

export const MUIStyledSocialMediasContent = styled(IconButton)<{
  onMobile: boolean
}>(({ theme, onMobile }) => ({
  margin: '0 auto',
  transform: 'scale(1.5)',
  paddingTop: onMobile ? theme.spacing(5) : 0,
  [theme.breakpoints.down('md')]: {
    display: onMobile ? 'block' : 'none',
  },
}))

export const MUIStyledIconButton = styled(IconButton)(() => ({}))
