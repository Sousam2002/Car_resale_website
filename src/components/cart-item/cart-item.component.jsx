import "./cart-item.styles.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  // var url="https://drive.google.com/thumbnail?id=";
  // console.log(imageUrl)
  console.log("hey");
  return (
    <div className="cart-item-container">
      <div className="image-container">
        <LazyLoadImage
          src={`https://drive.google.com/thumbnail?id=${imageUrl}`}
          alt={name}
        />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
