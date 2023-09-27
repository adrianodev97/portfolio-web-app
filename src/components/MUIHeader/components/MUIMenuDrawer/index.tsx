'use client'

import {
  MUIStyledMenuMobileButton,
  MUIMenuDrawerLogoContainer,
  MUIMenuDrawerContent,
  MUIStyledMenuDrawer,
  MUIMenuDrawerLogo,
  MUIStyledHeaderNavItem,
  MUIStyledHeaderNavList,
} from './styles'

import MenuIcon from '@mui/icons-material/Menu'

import Link from 'next/link'
import React, { useState } from 'react'
import { IMenuDrawerProps } from './types'
import { Typography } from '@mui/material'

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
            <Link href="/" onClick={() => setOpen(!open)}>
              <MUIMenuDrawerLogo>{'<A/>'}</MUIMenuDrawerLogo>
            </Link>
          </MUIMenuDrawerLogoContainer>

          <MUIStyledHeaderNavList>
            {pages.map((page, index) => (
              <MUIStyledHeaderNavItem key={index}>
                <Link href={page.href}>{page.title}</Link>
              </MUIStyledHeaderNavItem>
            ))}
          </MUIStyledHeaderNavList>
        </MUIMenuDrawerContent>
      </MUIStyledMenuDrawer>
    </>
  )
}
