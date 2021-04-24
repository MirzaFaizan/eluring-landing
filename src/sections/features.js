/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Smart from 'assets/feature/smart.svg';
import Winner from 'assets/feature/winner.svg';
import Cloud from 'assets/feature/cloud.svg';
import Setting from 'assets/feature/setting.svg';
import Design from 'assets/feature/design.svg';
import Chat from 'assets/feature/chat.svg';

const data = [
  {
    id: 1,
    imgSrc: Smart,
    altText: 'Period Tracking',
    title: 'Period Tracking',
    text:
      'You will have an estimated period cycle of your next 12 months which  will help you to prepare for period days before time, you can also edit your period cycle if it starts a day or two earlier or later.',
  },
  {
    id: 2,
    imgSrc: Winner,
    altText: 'Health',
    title: 'Health Tracking',
    text:
      'You can log your daily symptoms about how you feel, how much water you drink, how many hours you sleep, as well as you can add a note about something you want to keep log of for that day.',
  },
  {
    id: 3,
    imgSrc: Cloud,
    altText: 'Subscription',
    title: 'Subscription Box',
    text:
      'You can subscribe to a period kit that contains basic hygiene products that you will need in your period. Period kit be delivered at your given address anonymously just before your period starts.',
  },
  {
    id: 4,
    imgSrc: Setting,
    altText: 'Gynecologist',
    title: 'Doctor Appointments',
    text:
      'You will be able to book an appointment with top gynecologists from around the world for consultation regarding your health.',
  },
  {
    id: 5,
    imgSrc: Design,
    altText: 'Knowledge base',
    title: 'Knowledge base',
    text:
      'You can read blog posts about how to stay healthy and have lesser pain during your periods.',
  },
  {
    id: 6,
    imgSrc: Chat,
    altText: 'Community',
    title: 'Community',
    text:
      'Women will need to be verified to join this community which is women exclusive so they can communicate their problems regarding periods and discuss the solutions with each other from around the world.',
  },
];

export default function Features() {
  return (
    <section sx={{ variant: 'section.feature' }} id='features' >
      <Container>
        <SectionHeader
          slogan="Core features"
          title="The app that lets you roll worry free"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
