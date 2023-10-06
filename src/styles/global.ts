'use client'

import { Box, styled } from '@mui/material'

export const MUIStyledBody = styled('body')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}))

export const MUIStyledContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: `calc(1200px + ${theme.spacing(4)})`,
  margin: '0 auto',
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
}))
