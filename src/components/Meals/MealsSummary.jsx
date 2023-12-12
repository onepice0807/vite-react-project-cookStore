import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>맛있는 음식을 배달해 드립니다!</h2>
      <p>
        다양한 기내식 중에서 마음에 드는 메뉴를 골라 집에서 맛있는 점심 또는
        저녁 식사를 즐기세요.
      </p>
      <p>
        모든 식사는 숙련된 셰프가 고품질의 식재료를 사용하여 정해진 시간에 맞춰
        조리합니다!
      </p>
    </section>
  );
};

export default MealsSummary;
