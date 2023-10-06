import Image from 'next/image'
import ProfileImage from '@/assets/profile-hero.png'
import { Box, Grid, Typography } from '@mui/material'
import { MUIStyledContainer } from '@/styles/global'

export default function Home() {
  return (
    <main>
      <section>
        <MUIStyledContainer paddingY={10}>
          <Grid
            container
            sx={{
              flexDirection: { md: 'row', xs: 'column' },
              alignItems: { md: 'center', xs: 'unset' },
            }}
          >
            <Grid item md={6} sm={12}>
              <Typography color={'gray'} paddingY={1}>
                {'<html>'}
              </Typography>
              <Typography color={'gray'} ml={1} paddingY={2}>
                {'<body>'}
              </Typography>
              <Typography color={'gray'} ml={2}>
                {'<h1>'}
              </Typography>
              <Typography variant="h1" component={'h1'} ml={3}>
                Hello i am Adriano,
                <br />
                <Typography component={'span'} variant="h1" color={'primary'}>
                  Web developer
                </Typography>
                <Typography component={'span'} color={'gray'}>
                  {'</h1>'}
                </Typography>
              </Typography>

              <Typography color={'gray'} ml={2} paddingY={2}>
                {'<p>'}
              </Typography>
              <Typography variant="subtitle1" ml={3}>
                Full stack developer
              </Typography>
              <Typography color={'gray'} ml={2}>
                {'</p>'}
              </Typography>
            </Grid>
            <Grid item md={6} sm={12}>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '600px',
                  margin: '0 auto',
                  aspectRatio: 510 / 458,
                }}
              >
                <Image src={ProfileImage} fill alt="Profile hero" />
              </Box>
            </Grid>
          </Grid>
        </MUIStyledContainer>
      </section>
    </main>
  )
}
