'use client'

import { styled, IconButton } from '@mui/material'

export const MUIStyledSocialMediasContent = styled(IconButton)<{
  onMobile: boolean
}>(({ theme, onMobile }) => ({
  margin: '0 auto',
  paddingTop: onMobile ? theme.spacing(5) : 0,
  [theme.breakpoints.down('md')]: {
    display: onMobile ? 'block' : 'none',
    transform: 'scale(1.5)',
  },
}))

export const MUIStyledIconButton = styled(IconButton)(() => ({}))
