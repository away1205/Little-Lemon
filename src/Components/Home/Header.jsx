import { useState } from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  const isMobile = useMediaQuery('(max-width: 30em)');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={classes.headerContainer}>
        <div className={classes.header}>
          {isMobile && (
            <div
              className={
                isOpen
                  ? `${classes.lineContainer} ${classes.openContainer}`
                  : classes.lineContainer
              }
              role='button'
              onClick={() => setIsOpen((cur) => !cur)}
            >
              <div className={classes.line}></div>
              <div className={classes.line}></div>
              <div className={classes.line}></div>
            </div>
          )}

          <Link to={'/'} style={{ display: 'flex', alignItems: 'center' }}>
            <img src='./logo-a.svg' alt='Little Lemon logo' />
          </Link>

          {isMobile ? (
            <a role='button'>
              <img src='./Basket.svg' alt='basket icon' />
            </a>
          ) : (
            <nav>
              <ul className={isMobile ? classes.navMobile : classes.nav}>
                <li>
                  <a href='#home' role='button'>
                    HOME
                  </a>
                </li>
                <li>
                  <a href='#about' role='button'>
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href='#menu' role='button'>
                    MENU
                  </a>
                </li>
                <li>
                  <a href='#reservations' role='button'>
                    RESERVATIONS
                  </a>
                </li>
                <li>
                  <a href='#order' role='button'>
                    ORDER ONLINE
                  </a>
                </li>
                <li>
                  <a href='#login' role='button'>
                    LOGIN
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>

        {isMobile && isOpen && (
          <nav>
            <ul className={`${classes.navMobile} ${classes.fadeTransition}`}>
              <li>
                <a href='#home' role='button'>
                  HOME
                </a>
              </li>
              <li>
                <a href='#about' role='button'>
                  ABOUT
                </a>
              </li>
              <li>
                <a href='#menu' role='button'>
                  MENU
                </a>
              </li>
              <li>
                <a href='#reservations' role='button'>
                  RESERVATIONS
                </a>
              </li>
              <li>
                <a href='#order' role='button'>
                  ORDER ONLINE
                </a>
              </li>
              <li>
                <a href='#login' role='button'>
                  LOGIN
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}

export default Header;
