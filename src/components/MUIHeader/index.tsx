import { MUIStyledToolbar, MUIStyledLogoText, MUIStyledLogo } from './styles'

import { MUIStyledContainer } from '@/styles/global'
import { AppBar, Box } from '@mui/material'
import { MUINav } from './components/MUINav'
import Link from 'next/link'

import { MUIMenuDrawer } from './components/MUIMenuDrawer'

import { pages, socialMedias } from './mocks'
import { MUISocialMedias } from './components/MUISocialMedias'

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

            <MUINav pages={pages} />

            <MUISocialMedias socialMedias={socialMedias} />

            <MUIMenuDrawer pages={pages} socialMedias={socialMedias} />
          </MUIStyledToolbar>
        </MUIStyledContainer>
      </AppBar>
      <Box sx={{ width: '100%', height: '80px' }} />
    </>
  )
}
