import classes from './AboutSection.module.css';

function AboutSection() {
  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <div className={classes.description}>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>

          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>

        <div className={classes.image}>
          <img src='/about-a.jpg' alt='about img' className={classes.img1} />
          <img src='/about-b.jpg' alt='about img' />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
