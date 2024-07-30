import ProductCard from '@/ui/compontents/product-card/product-card.component';
import Styles from './best-sellers-section.module.css';

const BestSellersSection = ({bestSellers}) => {
  return (
    <div className={Styles.productGalleryWrapper}>
      <div className={Styles.galleryScroll}>
        <div className={Styles.gallery}>
          {bestSellers.map((bestSeller) => {
            return (
              <ProductCard product={bestSeller} key={bestSeller.id} />
            )
          })}
        </div>

      </div>

    </div>
  )
}

export default BestSellersSection;
