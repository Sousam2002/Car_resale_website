import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

// import ProductCard from "../../components/product-card/product-card.component";
// import CategoryPreview from "../../components/category-preview/category-preview.component";

import './shop.styles.scss';
const Shop = () => {
  // const {categoriesMap} = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />}>
      </Route>
    </Routes>
  );
};


export default Shop;