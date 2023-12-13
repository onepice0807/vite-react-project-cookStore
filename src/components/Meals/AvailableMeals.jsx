/* eslint-disable react/jsx-key */
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: '스시',
    description: '최고급 생선 및 채소',
    price: 22.99,
  },
  {
    id: 'm2',
    name: '슈니첼',
    description: '독일 특산품!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: '바베큐 버거',
    description: '미국식, 날것, 육류',
    price: 12.99,
  },
  {
    id: 'm4',
    name: '그린 보울',
    description: '건강...그리고 친환경...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
