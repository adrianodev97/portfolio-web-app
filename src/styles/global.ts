'use client'

import { Box, styled } from '@mui/material'

export const MUIStyledBody = styled('body')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}))

export const MUIStyledContainer = styled(Box)(() => ({
  width: '90%',
  maxWidth: '1200px',
  margin: '0 auto',
}))
