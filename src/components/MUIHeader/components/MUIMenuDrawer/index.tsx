'use client'

import {
  MUIStyledMenuMobileButton,
  MUIMenuDrawerLogoContainer,
  MUIMenuDrawerContent,
  MUIStyledMenuDrawer,
} from './styles'

import MenuIcon from '@mui/icons-material/Menu'

import Link from 'next/link'
import React, { useState } from 'react'
import { IMenuDrawerProps } from './types'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MUIMenuDrawer = ({ pages, socialMedias }: IMenuDrawerProps) => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <MUIStyledMenuMobileButton
        size="medium"
        color="primary"
        aria-label="menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </MUIStyledMenuMobileButton>
      <MUIStyledMenuDrawer
        anchor={'right'}
        open={open}
        onClose={() => setOpen(false)}
      >
        <MUIMenuDrawerContent>
          <MUIMenuDrawerLogoContainer>
            <Link href="/" onClick={() => setOpen(!open)}></Link>
          </MUIMenuDrawerLogoContainer>
        </MUIMenuDrawerContent>
      </MUIStyledMenuDrawer>
    </>
  )
}
