import classes from "./Card.module.css";
import {useState} from "react";

export default function Card({
  // eslint-disable-next-line react/prop-types
  card: { id, name, price, haveUser,  haveStore, brand, article, discount},
}) {
  const [count, setCount] = useState(Number(haveUser));
  const increaseCounter = () => {
    setCount(count + 1);
 }
 const deccreaseCounter = () => {
  setCount(count - 1);
}

  return (
    <li className={classes.card}>
      <div className={classes.card__main}>
      <div className={classes.card__header}>
       <img src="../motor.png" alt="картинка"  className={classes.card__img}/>
       <img src="../public/heart.png" alt="лайк"  className={classes.card__heart}/>
      </div>

      <div className={classes.card__raiting}></div>

      <p className={classes.card__name}>{name}</p>

      <div className={classes.card__otherInfo}>
       <div className={classes.card__brand}>
         <p className={classes.card__brandName}>Брэнд: </p>
         <span className={classes.card__brandValue}>{brand}</span>
       </div>
       <div className={classes.card__article}>
         <p className={classes.card__articleName}>Артикул: </p>
         <span className={classes.card__articleValue}>{article}</span>
       </div>
      </div>

      <div className={classes.card__caption}>
        <p className={classes.card__captionName}>Цена за шт</p>
        <div className={classes.card__captionCount}>
          <img src="../public/homeLogo.png" alt="склад" className={classes.card__captionCountLogo}/>
          <div className={classes.card__captionCountValue}>
            {haveStore}
            <p className={classes.card__captionCountValueText}>шт</p>
          </div>
        </div>
      </div>

      {count ? (
        <div className={classes.card__priceContainer}>
        <span className={classes.card__binPriceDiscount}>{price*(discount / 100)}Р</span>
        <div className={classes.card__binPriceCounter}>
          <button className={classes.card__counterButton}  onClick={deccreaseCounter}><img src="../public/minus.png" alt="" /></button>
          <span className={classes.card__binHaveUser}>{count}</span>
          <button className={classes.card__counterButton} onClick={increaseCounter}><img src="./images/plus.png" alt="" /></button>
        </div>
        <img src="../binLogo.png" alt="" className={classes.card__bin}/>
      </div>
        
      ) : (
        <div className={classes.card__priceContainer}>
          <span className={classes.card__priceDiscount}>{price*(discount / 100)}Р</span>
          <span className={classes.card__Discount}>-{discount}%</span>
          <span className={classes.card__price}>{price}Р</span>
        </div>  
      )}
      </div>
    </li>
  );
}
