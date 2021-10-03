import Buycard from "../Addtocard/Buycard";
import { deleteitem, removeItemAll } from "../FackDB/FackBd";
import useCart from "../Hock/uesCart";
import useLoadData from "../Hock/useLoadData";
import Product from "../Products/Product";

const OderReview = () => {
  const [datas] = useLoadData();
  const [cartAdd, setCartAdd] = useCart(datas);
  console.log(cartAdd);

  const removeItem = (id) => {
    deleteitem(id);
    const cardUpadte = cartAdd.filter((cd) => cd.key !== id);
    setCartAdd(cardUpadte);
  };

  const shopingFinsh = () => {
    setCartAdd([]);
    removeItemAll();
  };
  return (
    <div className="conteaner">
      <div className="product-data">
        {cartAdd.map((cd) => (
          <Product product={cd}>
            <button onClick={() => removeItem(cd.key)} className="card-btn">
              Remove Item
            </button>
          </Product>
        ))}
        {/* <Product product={cartAdd}></Product> */}
      </div>
      <div>
        <Buycard cartAdd={cartAdd}>
          <button onClick={shopingFinsh} className="card-btn">
            shopingFinsh
          </button>
        </Buycard>
      </div>
    </div>
  );
};

export default OderReview;
