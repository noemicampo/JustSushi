import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Japanese Food</h2>
      <p>
        Delivered to you.
      </p>
      <p>
        Everyday from 1:00 PM to 11:00 PM
      </p>
    </section>
  );
};

export default MealsSummary;
