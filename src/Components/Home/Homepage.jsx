import AboutSection from './AboutSection';
import FoodSection from './FoodSection';
import Footer from './Footer';
import Header from './Header';
import HeroSection from './HeroSection';
import TestimonySection from './TestimonySection';

function Homepage() {
  return (
    <>
      <Header />
      <HeroSection />
      <FoodSection />
      <TestimonySection />
      <AboutSection />
      <Footer />
    </>
  );
}

export default Homepage;
