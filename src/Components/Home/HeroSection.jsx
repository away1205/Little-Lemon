import { Link, useLocation } from 'react-router-dom';
import useMediaQuery from '../../hooks/useMediaQuery';
import Button from '../Button';
import classes from './HeroSection.module.css';

function HeroSection() {
  const isMobile = useMediaQuery('(max-width: 30em)');
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <section className={classes.heroContainer}>
      <section className={classes.heroSection}>
        <div className={classes.displayContainer}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          {isHome && (
            <Link to={'/reserve'}>
              <Button
                padding={isMobile ? '8px' : '20px'}
                width={isMobile ? null : '200px'}
              >
                Reserve a Table
              </Button>
            </Link>
          )}

          <img
            src='/restauranfood.jpg'
            alt='Hero Img'
            className={isHome ? classes.homeImg : classes.notHomeImg}
          />
        </div>
      </section>
    </section>
  );
}

export default HeroSection;
