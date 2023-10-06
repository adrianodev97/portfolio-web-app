'use client'

import { MUIStyledLink, MUIStyledList, MUIStyledNav } from './styles'
import { Box } from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { INavProps } from './types'

export const MUINav = ({ pages, onMobile }: INavProps) => {
  const pathname = usePathname()

  return (
    <MUIStyledNav onMobile={onMobile || false}>
      <MUIStyledList>
        {pages.map((page, index) => (
          <Box key={index} component="li">
            <Link href={page.href}>
              <MUIStyledLink isActive={page.href === pathname}>
                {page.href === pathname ? `<${page.title}>` : page.title}
              </MUIStyledLink>
            </Link>
          </Box>
        ))}
      </MUIStyledList>
    </MUIStyledNav>
  )
}
