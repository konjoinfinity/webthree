import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const ImageBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: '#000',
  opacity: 0.5,
  transition: theme.transitions.create('opacity'),
}));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  display: 'block',
  padding: 0,
  borderRadius: 0,
  height: '40vh',
  [theme.breakpoints.down('md')]: {
    width: '100% !important',
    height: 100,
  },
  '&:hover': {
    zIndex: 1,
  },
  '&:hover .imageBackdrop': {
    opacity: 0.15,
  },
  '&:hover .imageMarked': {
    opacity: 0,
  },
  '&:hover .imageTitle': {
    border: '4px solid currentColor',
  },
  '& .imageTitle': {
    position: 'relative',
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  '& .imageMarked': {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

const images = [
  {
    url: 'https://i.seadn.io/gae/0DF-H8y6aESfDCzRYsHcdbt4OCvGdg2CjkEXbWy_XsqIsTsJY3s7T9jnArlURCb-A_uiG7umQuzFZW5EBE-7yMDgzFjqWk43BPGr?auto=format&w=1000',
    title: 'Beauty Baebee #1',
    width: '33%',
  },
  {
    url: 'https://i.seadn.io/gae/4jNkq6zUkjPRMpJxfQkEK5JxPc-4-C6fvBvwSi7nGPFAlJ6Mid0-BmwhQahGAl655M5gCV1SVW8cUcScNB4nKoqEiwUTk00U8iaD6A?auto=format&w=1000',
    title: 'Beauty Baebee #10',
    width: '33%',
  },
  {
    url: 'https://i.seadn.io/gae/JUXkFlqlmD15NSUyu8lC4rXh3ht_UpDJOz2AwyIIBpwikNCX61YZT6oT0wlQv-aTYbcOM2kPvu0Im-0jyDHnLeEIu4FDG-TL9ynC?auto=format&w=1000',
    title: 'Beauty Baebee #9',
    width: '33%',
  },
  {
    url: 'https://i.seadn.io/gae/NdK4OUDGq0r-10Z3hYEmSThJfzVzqom7Gfnb0utMt7pnGunS1raKXOaaZiooUPXUt21gUjy-VfPxlPC3qp3X3JMaddqBfvizWjb9?auto=format&w=1000',
    title: 'Beauty Baebee #8',
    width: '33%',
  },
  {
    url: 'https://i.seadn.io/gae/bFI6oyaPNfB7qmUAx4eWaT0fHh_oc6TMKCx3XsAxP47rNU61zH6YBG7Qhz81Oiy7mMXswMzX-82D8C3t6c1Fbz25vVPYPKmrSPCjxA?auto=format&w=1000',
    title: 'Beauty Baebee #7',
    width: '33%',
  },
  {
    url: 'https://i.seadn.io/gae/cNlXGKOTrdFXXyglFqDma7xbv6MBNUh9buv58JLep7_cLdtxGfssZWf0ML76fUGz7PMaEGQ6zHcX29MwmUSEbBvpAnLYmz3lOmUAvg?auto=format&w=1000',
    title: 'Beauty Baebee #2',
    width: '33%',
  },
  {
    url: 'https://i.seadn.io/gae/EDgprW71oL6SGOmPuwTz6qIH3Ue56AS08LI0gHFhsbdm0LxmqkwLuFKoNMMA_S_8-1e4TR45DJOwTIDwpmbG9U6cnenXf9KTwEA1rg?auto=format&w=1000',
    title: 'Beauty Baebee #6',
    width: '33%',
  },
  {
    url: 'https://i.seadn.io/gae/_XmFP7gVvkO333FodcrgzYY72y2QVAXU-8U6rZ4tn2AwqNnT8lsoLaEugwyNYJ6n4Ee1HrQ8XMRCoAi2SoLisb2Pj8R4sStgBAGazA?auto=format&w=1000',
    title: 'Beauty Baebee #5',
    width: '33%',
  },
  {
    url: 'https://i.seadn.io/gae/nQl48W0kUoshV1JWMV3gAQ6Rh-YA3-sfLyxpkZecr3FwOkz4YkG7zVAq2OTglPanpB7QX20uPQD-Ajy8Zhj8VomvNSjS8wt9Q9NAHg?auto=format&w=1000',
    title: 'Beauty Baebee #4',
    width: '33%',
  },
];

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Recent Mints
      </Typography>
      <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <a href="https://opensea.io/collection/beauty-baebee-nft">
            <Box
              sx={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'common.white',
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
            </a>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  );
}
