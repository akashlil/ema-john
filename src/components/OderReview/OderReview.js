import Buycard from "../Addtocard/Buycard";
import useCart from "../Hock/uesCart";
import useLoadData from "../Hock/useLoadData";
import Product from "../Products/Product";

const OderReview = () => {
  const [datas] = useLoadData();
  const [cartAdd] = useCart(datas);
  console.log(cartAdd);

  return (
    <div className="conteaner">
      <div className="product-data">
        {cartAdd.map((cd) => (
          <Product product={cd}>
            <button className="card-btn">Remove Item</button>
          </Product>
        ))}
        {/* <Product product={cartAdd}></Product> */}
      </div>
      <div>
        <Buycard cartAdd={cartAdd}></Buycard>
      </div>
    </div>
  );
};

export default OderReview;
