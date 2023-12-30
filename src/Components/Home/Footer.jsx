import classes from './Footer.module.css';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <img src='/logo-b.png' alt='Little Lemon Logo' />

        <div className={classes.navContainer}>
          <nav>
            <strong>Doormat Navigation</strong>
            <ul>
              <li>
                <a href=''>Home</a>
              </li>
              <li>
                <a href=''>About</a>
              </li>
              <li>
                <a href=''>Menu</a>
              </li>
              <li>
                <a href=''>Reservations</a>
              </li>
              <li>
                <a href=''>Order Online</a>
              </li>
              <li>
                <a href=''>Login</a>
              </li>
            </ul>
          </nav>

          <nav>
            <strong>Contact</strong>
            <ul>
              <li>
                <a href=''>Address</a>
              </li>
              <li>
                <a href=''>Phone Number</a>
              </li>
              <li>
                <a href=''>Email</a>
              </li>
            </ul>
          </nav>

          <nav>
            <strong>Social Media Links</strong>
            <ul>
              <li>
                <a href=''>Instagram</a>
              </li>
              <li>
                <a href=''>Whatsapp</a>
              </li>
              <li>
                <a href=''>Website</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
