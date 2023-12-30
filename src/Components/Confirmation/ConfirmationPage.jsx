import Footer from '../Home/Footer';
import Header from '../Home/Header';
import HeroSection from '../Home/HeroSection';
import ConfirmationForm from './ConfirmationForm';

function ConfirmationPage({ bookingData = {} }) {
  return (
    <>
      <Header />
      <HeroSection />
      <ConfirmationForm bookingData={bookingData} />
      <Footer />
    </>
  );
}

export default ConfirmationPage;
