'use client';

// Styles
import Styles from './horizontal-posts-carousel.module.css';

// Components
import BlogCard from '../blog-card/blog-card.component';

// Hooks
import {useState, useEffect} from 'react';


const HorizontalPostsCarousel = ({sectionTitle, blogPosts}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const productContainer = document.querySelector(`.${Styles.sliderContainer}`);
    const containerDimensions = productContainer.getBoundingClientRect();
    setContainerWidth(containerDimensions.width);
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length);
  };

  if(currentIndex > blogPosts.length - currentIndex) {
    setCurrentIndex(0)
  }


  return (
    <div className={Styles.sliderSection}>

      <h2 className={Styles.sectionTitle}>{sectionTitle}</h2>
      {currentIndex === 0 ? "" : <button className={Styles.preBtn} onClick={handlePrevClick}>&lt;</button>}
      <button className={Styles.nxtBtn} onClick={handleNextClick}>&gt;</button>

      <div className={Styles.sliderContainer}>
        {blogPosts.slice(currentIndex, currentIndex + (containerWidth / 300)).map((article) => {
          return (
            <BlogCard post={article} key={article.id}/>
          )
        })}

      </div>
    </div>
  )
}

export default HorizontalPostsCarousel;
