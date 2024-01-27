import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button,{BUTTON_TYPE_CLASSES} from '../button/button.component';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './product-card.styles.scss';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  
  const addProductToCart = () => addItemToCart(product);
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