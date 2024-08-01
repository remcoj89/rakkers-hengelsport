'use client';

// Styles
import Styles from './horizontal-product-carousel.module.css';

// Hooks
import {useState, useEffect} from 'react';

// Components
import ProductCard from '../product-card/product-card.component';

const HorizontalProductCarousel = ({sectionTitle, products}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const productContainer = document.querySelector(`.${Styles.sliderContainer}`);
    const containerDimensions = productContainer.getBoundingClientRect();
    setContainerWidth(containerDimensions.width);
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  if(currentIndex > products.length - currentIndex) {
    setCurrentIndex(0)
  }


  return (
    <div className={Styles.sliderSection}>

      <h2 className={Styles.sectionTitle}>{sectionTitle}</h2>
      {currentIndex === 0 ? "" : <button className={Styles.preBtn} onClick={handlePrevClick}>&lt;</button>}
      <button className={Styles.nxtBtn} onClick={handleNextClick}>&gt;</button>

      <div className={Styles.sliderContainer}>
        {products.slice(currentIndex, currentIndex + (containerWidth / 300)).map((product) => {
          return (
            <ProductCard  product={product} key={product.id} />
          )
        })}

      </div>
    </div>
  )
}

export default HorizontalProductCarousel;
