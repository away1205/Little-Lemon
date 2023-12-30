import classes from './FoodSection.module.css';
import Button from '../Button';
import FoodCard from '../FoodCard';
import useMediaQuery from '../../hooks/useMediaQuery';

const foodList = [
  {
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    img: '/greek-salad.jpg',
  },
  {
    name: 'Bruchetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    img: '/bruchetta.svg',
  },
  {
    name: 'Lemon Dessert',
    price: '$5.00',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    img: '/lemon-dessert.jpg',
  },
];

function FoodSection() {
  const isMobile = useMediaQuery('(max-width: 30em)');

  return (
    <section className={classes.foodSection}>
      <div className={classes.foodContainer}>
        {!isMobile && (
          <div className={classes.sectionTitle}>
            <h1>This weeks specials!</h1>
            <Button width='200px'>Online Menu</Button>
          </div>
        )}

        <div className={classes.cardContainer}>
          {foodList.map((food) => {
            return (
              <FoodCard
                name={food.name}
                price={food.price}
                description={food.description}
                key={food.name}
                imgSrc={food.img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FoodSection;
