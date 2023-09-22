'use client'

import {
  styled,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material'

export const MUIStyledAppBar = styled(AppBar)(() => ({}))

export const MUIStyledToolbar = styled(Toolbar)(() => ({}))

// remove display none in dashboard route
export const MUIStyledIconButton = styled(IconButton)(() => ({
  display: 'none',
}))

export const MUIStyledTypography = styled(Typography)(() => ({}))

export const MUIStyledButton = styled(Button)(() => ({}))
