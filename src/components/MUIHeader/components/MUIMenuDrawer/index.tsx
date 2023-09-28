'use client'

import {
  MUIStyledMenuMobileButton,
  MUIMenuDrawerLogoContainer,
  MUIMenuDrawerContent,
  MUIStyledMenuDrawer,
  MUIMenuDrawerLogo,
} from './styles'

import MenuIcon from '@mui/icons-material/Menu'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IMenuDrawerProps } from './types'
import { MUINav } from '../MUINav'
import { usePathname } from 'next/navigation'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MUIMenuDrawer = ({ pages, socialMedias }: IMenuDrawerProps) => {
  const [open, setOpen] = useState<boolean>(false)

  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

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

          <MUINav pages={pages} onMobile={true} />
        </MUIMenuDrawerContent>
      </MUIStyledMenuDrawer>
    </>
  )
}
