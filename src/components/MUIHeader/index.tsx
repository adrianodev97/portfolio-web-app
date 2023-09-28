import {
  MUIStyledToolbar,
  MUIStyledIconButton,
  MUIStyledLogoText,
  MUIStyledLogo,
  MUIStyledSocialMediasContent,
} from './styles'

import { MUIStyledContainer } from '@/styles/global'
import { AppBar, Box } from '@mui/material'
import { MUINav } from './components/MUINav'
import Link from 'next/link'
import React from 'react'
import { MUIMenuDrawer } from './components/MUIMenuDrawer'

import { pages, socialMedias } from './mocks'

export const MUIHeader = () => {
  return (
    <>
      <AppBar position="fixed">
        <MUIStyledContainer>
          <MUIStyledToolbar>
            <MUIStyledLogo>
              <Link href={'/'}>
                <MUIStyledLogoText>{`<A/>`}</MUIStyledLogoText>
                Adriano Nascimento
              </Link>
            </MUIStyledLogo>

            <MUINav pages={pages} onMobile={false} />

            <MUIStyledSocialMediasContent>
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
            </MUIStyledSocialMediasContent>

            <MUIMenuDrawer pages={pages} socialMedias={socialMedias} />
          </MUIStyledToolbar>
        </MUIStyledContainer>
      </AppBar>
      <Box sx={{ width: '100%', height: '80px' }} />
    </>
  )
}
