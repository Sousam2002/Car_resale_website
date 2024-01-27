import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  
  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));
  // console.log("souhardya")
  return (
    <div className='product-card-container'>
      <div className='image_container'>
       <LazyLoadImage src={`/images/${imageUrl}`} alt={`${name}`} />
      </div>
      
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>Rs {price}</span>
      </div>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;