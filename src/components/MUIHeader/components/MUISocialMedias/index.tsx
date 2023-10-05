import Link from 'next/link'
import React from 'react'
import { MUIStyledSocialMediasContent, MUIStyledIconButton } from './styles'
import { ISocialMediasProps } from './types'

export const MUISocialMedias = ({
  socialMedias,
  onMobile,
}: ISocialMediasProps) => {
  return (
    <MUIStyledSocialMediasContent onMobile={onMobile || false}>
      {socialMedias.map((social, index) => (
        <Link href={social.href} key={index} target="_blank">
          <MUIStyledIconButton size="medium" color="primary" aria-label="menu">
            {
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              React.createElement(social.icon)
            }
          </MUIStyledIconButton>
        </Link>
      ))}
    </MUIStyledSocialMediasContent>
  )
}
