/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Flex, Box, Heading, Text, Image, Button } from 'theme-ui';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from 'components/link';
import { FaPlayCircle, FaRocket } from 'react-icons/fa';
import BannerBG from 'assets/bannerBg.png';
import BannerThumb from 'assets/mockup-eluring.png';

import client1 from 'assets/sponser/global-hack.svg';
import client2 from 'assets/sponser/tal-tech.png';


const data = [
  {
    id: 1,
    path: '#',
    image: client1,
    title: 'Global Hack',
  },
  {
    id: 2,
    path: '#',
    image: client2,
    title: 'TalTech',
  },
];

export default function Banner() {
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = e => {
    e.preventDefault();
    setVideoOpen(true);
  };
  return (
    <section sx={styles.banner} id="home">
      <Container sx={styles.banner.container}>
        <Box sx={styles.banner.contentBox}>
          <Heading as="h1" variant="heroPrimary">
            Partner in every period of your life
          </Heading>
          <Text as="p" variant="heroSecondary">
            Track your period cycle and daily health and have the facility to
            subscribe to a period kit that will be delivered at your given
            address anonymously just before your period starts.
          </Text>
          <Flex>
            <Button variant="whiteButton" aria-label="Get Started" >
              <Link path={'http://app.eluring.com'} target="_blank" sx={{textDecoration: 'none', color:'black'}}>
             Eluring (Alpha) <FaRocket  /> 
              </Link>
            </Button>
            <>
              <ModalVideo
                channel="youtube"
                isOpen={videoOpen}
                videoId="cSw6MhIuN0c"
                onClose={() => setVideoOpen(false)}
              />
              <Button
                variant="textButton"
                aria-label="Watch Video"
                onClick={handleClick}>
                <FaPlayCircle /> Watch Video
              </Button>
            </>
          </Flex>
          <Flex sx={styles.sponsorBox}>
            <Text sx={styles.sponsorTitle}>Participated in:</Text>
            <Box sx={styles.sponsorBox.sponsor}>
              {data.map((item, index) => (
                <Link
                  path={item.path}
                  key={`client-key${index}`}
                  sx={{
                    maxHeight: 100,
                    maxWidth: 100,
                    minHeight: 80,
                    minWidth:80
                  }}>
                  <Image src={item.image} alt={item.title} />
                </Link>
              ))}
            </Box>
          </Flex>
        </Box>

        <Box sx={styles.banner.imageBox}>
          <Image src={BannerThumb} alt="eluring application" />
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    overflow: ['hidden', 'initial', null, 'hidden'],
    backgroundImage: `url(${BannerBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'top left',
    backgroundSize: 'cover',
    borderBottomRightRadius: [100, 150, null, null, null, 250],
    pt: ['150px', null, null, null, null, null, '140px', '130px'],
    pb: ['100px', null, null, '110px', null, 10, '150px'],
    backgroundColor: 'primary',
    container: {
      display: 'flex',
    },
    contentBox: {
      width: ['100%', null, '85%', '55%', '50%', '55%'],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      flexShrink: 0,
      pt: [0, null, null, null, null, null, 5, 7],
    },
    imageBox: {
      display: ['none', null, null, 'block'],
      justifyContent: 'flex-end',
      mt: [0, null, null, '40px', 4, 7, 0],
      mb: [0, null, null, null, '-45px', '-70px', null, '-115px'],
      overflow: 'hidden',
      textAlign: 'right',
      maxHeight:700,
      maxWidth:300
    },
  },
  sponsorTitle: {
    color: 'white',
    fontSize: [1, 2],
    opacity: 0.6,
    pr: 20,
    flexShrink: 0,
    pb: [2, null, 0],
  },
  sponsorBox: {
    pt: ['35px', null, null, null, null, '45px'],
    flexDirection: ['column', null, 'row'],
    sponsor: {
      display: 'flex',
      alignItems: 'center',
      '> a': {
        mr: [5, null, null, 4, 6],
        display: 'flex',
        '&:last-of-type': {
          mr: 0,
        },
      },
    },
  },
};
