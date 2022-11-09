import styles from './styles.module.css';

const GoodsCard = ({ goods }) => {
  return (
    <div className={styles.goods}>
      {goods.map(good => (
        <div key={good.name} className={styles.good}>
          <img src={good.image} alt={good.name} className={styles.image} />
          <p>{good.name}</p>
          <p>{good.price}</p>
        </div>
      ))}
    </div>
  );
};

export default GoodsCard;
