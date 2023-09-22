import { MUIStyledToolbar, MUIStyledIconButton } from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { MUIStyledContainer } from '@/styles/global'
import { AppBar, Box, Button, Typography } from '@mui/material'

export const MUIHeader = () => {
  const pages = ['Products', 'Pricing', 'Blog']
  return (
    <AppBar position="fixed">
      <MUIStyledContainer>
        <MUIStyledToolbar>
          <Typography>
            <Typography component="span">{`<A/>`}</Typography>
            <Typography component="span">Adriano Nascimento</Typography>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <MUIStyledIconButton size="large" color="primary" aria-label="menu">
            <GitHubIcon />
          </MUIStyledIconButton>
          <MUIStyledIconButton size="large" color="primary" aria-label="menu">
            <LinkedInIcon />
          </MUIStyledIconButton>
          <MUIStyledIconButton size="large" color="primary" aria-label="menu">
            <MailOutlineIcon />
          </MUIStyledIconButton>
          <MUIStyledIconButton
            size="large"
            color="primary"
            aria-label="menu"
            sx={{ display: 'none' }}
          >
            <MenuIcon />
          </MUIStyledIconButton>
        </MUIStyledToolbar>
      </MUIStyledContainer>
    </AppBar>
  )
}
