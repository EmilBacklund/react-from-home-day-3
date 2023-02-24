import { useState } from 'react';
import productsContent from '../pageContent/productsContent';

const ProductList = () => {
  const [basket, setBasket] = useState([]);
  const total = productsContent.reduce((acc, curr) => acc + curr.price, 0);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
    console.log(basket);
  };

  return (
    <>
      <div className="flexer">
        <div>
          <h2>Products</h2>
          <ul>
            {productsContent.map(({ title, id, price }) => (
              <li key={id} className={price > 25 ? 'expensive' : 'cheap'}>
                {title} - {price} kr
                <button
                  className="addToBasket"
                  onClick={() => addToBasket({ title, id, price })}
                >
                  Add to Basket
                </button>
              </li>
            ))}
          </ul>
          <div>Total price for all products together is {total} kr</div>
        </div>
        <div>
          <h2>Basket</h2>
          <ul>
            {basket.map(({ title, price }, index) => {
              return (
                <li key={index}>
                  {title} - {price} kr
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProductList;
