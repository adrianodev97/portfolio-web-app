import {
  MUIStyledToolbar,
  MUIStyledIconButton,
  MUIStyledLogoText,
  MUIStyledLogo,
} from './styles'
import MenuIcon from '@mui/icons-material/Menu'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import { MUIStyledContainer } from '@/styles/global'
import { AppBar, Box } from '@mui/material'
import { MUINav } from './components/MUINav'
import Link from 'next/link'
import React from 'react'

const socialMedias = [
  {
    icon: GitHubIcon,
    href: 'https://github.com/adrianodev97',
  },
  {
    icon: LinkedInIcon,
    href: 'https://www.linkedin.com/in/adriano-nascimento-dev97/',
  },
  {
    icon: MailOutlineIcon,
    href: 'mailto:adrianojunior.dev97@gmail.com',
  },
]

export const MUIHeader = () => {
  return (
    <>
      <AppBar position="fixed">
        <MUIStyledContainer>
          <MUIStyledToolbar>
            <Link href={'/'}>
              <MUIStyledLogo>
                <MUIStyledLogoText>{`<A/>`}</MUIStyledLogoText>
                Adriano Nascimento
              </MUIStyledLogo>
            </Link>
            <MUINav />
            <Box>
              {socialMedias.map((social, index) => (
                <Link href={social.href} key={index} target="_blank">
                  <MUIStyledIconButton
                    size="medium"
                    color="primary"
                    aria-label="menu"
                  >
                    {React.createElement(social.icon)}
                  </MUIStyledIconButton>
                </Link>
              ))}

              <MUIStyledIconButton
                size="medium"
                color="primary"
                aria-label="menu"
                sx={{ display: 'none' }}
              >
                <MenuIcon />
              </MUIStyledIconButton>
            </Box>
          </MUIStyledToolbar>
        </MUIStyledContainer>
      </AppBar>
      <Box sx={{ width: '100%', height: '80px' }} />
    </>
  )
}
