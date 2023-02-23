import productsContent from '../pageContent/productsContent';

const ProductList = () => {
  const total = productsContent.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <>
      <ul>
        {productsContent.map(({ title, id, price }) => (
          <li key={id} className={price > 25 ? 'expensive' : 'cheap'}>
            {title} - {price} kr
          </li>
        ))}
      </ul>
      <div>Total price for all products together is {total} kr</div>
    </>
  );
};

export default ProductList;
