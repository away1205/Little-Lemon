/* eslint-disable react/prop-types */
import { IconBike } from '@tabler/icons-react';
import classes from './FoodCard.module.css';

function FoodCard({
  name = 'name',
  price = 'price',
  description = 'desc',
  imgSrc,
}) {
  return (
    <div className={classes.cardContainer}>
      <img src={imgSrc} alt={name} className={classes.foodImg} />

      <div
        style={{
          padding: '1.6rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3>{name}</h3>
          <span>{price}</span>
        </div>

        <p style={{ height: '140px' }}>{description}</p>

        <div
          style={{
            paddingTop: '2rem',
            display: 'flex',
            gap: '.4rem',
            cursor: 'pointer',
          }}
        >
          <a role='button'>Order a delivery</a>
          <IconBike color='green' />
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
