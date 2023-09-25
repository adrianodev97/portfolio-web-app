'use client'

import { MUIStyledLink, MUIStyledList, MUIStyledNav } from './styles'
import { Box } from '@mui/material'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export const MUINav = () => {
  const pathname = usePathname()

  const pages = [
    { title: 'Home', href: '/' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Serviços', href: '/servicos' },
    { title: 'Sobre', href: '/sobre' },
    { title: 'Contato', href: '/contato' },
  ]

  return (
    <MUIStyledNav>
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
