import { useContext , Fragment} from "react";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../components/product-card/product-card.component";
import './shop.styles.scss';
const Shop = () => {
  const {categoriesMap} = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title)=>(
        <Fragment key={title}>
          <br/>
          <h2 style={{textAlign:"center"}}>{title.toUpperCase()}</h2>
          <br/>
          <div className="products-container">
            {categoriesMap[title].map((product)=>(
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
};


export default Shop;