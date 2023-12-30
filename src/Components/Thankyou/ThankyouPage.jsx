import { Container, Stack } from '@mantine/core';
import Footer from '../Home/Footer';
import Header from '../Home/Header';
import HeroSection from '../Home/HeroSection';
import Button from '../Button';
import { Link } from 'react-router-dom';

function ThankyouPage() {
  return (
    <>
      <Header />
      <HeroSection />
      <Container py={'lg'}>
        <Stack align='center' maw={900}>
          <img src='/thankyou.png' alt='Thankyou' width={'400px'} />
          <h2 style={{ textTransform: 'uppercase', marginBottom: '2rem' }}>
            Your table is reserved
          </h2>

          <Link to={'/'} style={{ width: '50%' }}>
            <Button>Back to Homepage</Button>
          </Link>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}

export default ThankyouPage;
