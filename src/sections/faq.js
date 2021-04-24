/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'Why do women need a period kit when they can simply go and buy things themselves?',
    contents: (
      <div>
        In 3rd world countries periods are considered a taboo and women feel hesitant to go and buy basic hygiene products.
        All the shops in those regions are operated by men and there is no basic way to get them delivered to you.
      </div>
    ),
  },
  {
    title: 'Is the Period tracker 100% accurate?',
    contents: (
      <div>
         Regular health check will help you stay healthy and pick up early warning signs of disease or illness.
      </div>
    ),
  },
  {
    title: `Why do women need to keep a log of their health?`,
    contents: (
      <div>
        To live a stress free routine, without worrying about you
      </div>
    ),
  },
  {
    title: `Is subscription facility is available in all countries?`,
    contents: (
      <div>
        No, initially we are launching in one country, but in our future plans we will offer this service in other locations based on our
        users needs.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }} id='faq'>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
