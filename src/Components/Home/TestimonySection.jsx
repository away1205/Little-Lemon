/* eslint-disable react/prop-types */
import classes from './TestimonySection.module.css';

const reviewList = [
  {
    name: 'Jack Roselt',
    img: '/ava1.jpg',
    review: 'The food is good',
  },
  {
    name: 'Edmund Chan',
    img: '/ava2.jpg',
    review: 'The food is good',
  },
  {
    name: 'Pirc Rosaline',
    img: '/ava3.jpg',
    review: 'The food is good',
  },
  {
    name: 'Magdalena Fortuna',
    img: '/ava4.jpg',
    review: 'The food is good',
  },
];

function TestimonySection() {
  return (
    <section className={classes.section}>
      <h1>Testimonials</h1>

      <div className={classes.testimonyList}>
        {reviewList.map((review) => {
          return (
            <TestimonyCard
              name={review.name}
              review={review.review}
              img={review.img}
              key={review.img}
            />
          );
        })}
      </div>
    </section>
  );
}

function TestimonyCard({ img, name, review }) {
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '16px',
        width: '200px',
      }}
    >
      <div style={{ display: 'flex', gap: '4px' }}>
        <img src='/star.svg' alt='star icon' />
        <img src='/star.svg' alt='star icon' />
        <img src='/star.svg' alt='star icon' />
      </div>

      <figure
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          marginTop: '1rem',
          marginBottom: '2rem',
        }}
      >
        <img
          src={img}
          alt={name}
          style={{ borderRadius: '16px' }}
          width={'80px'}
        />

        <figcaption
          style={{
            color: '#000',
            fontFamily: 'Karla',
            fontSize: '16px',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'normal',
            // textWrap: 'nowrap',
          }}
        >
          {name}
        </figcaption>
      </figure>

      <p style={{ color: 'black' }}>&quot;{review}&quot;</p>
    </div>
  );
}

export default TestimonySection;
