import Styles from './product-card.module.css';
import Image from 'next/image'
import Button from '../button/button.component'

const ProductCard = ({product}) => {
  return (
    <div className={Styles.productCard}>
    <div className={Styles.productImage}>
      <span className={Styles.discountTag}>50% korting</span>
      <Image
        alt={product.imageAlt}
        className={Styles.productThumb}
        height={500}
        src={product.imageSrc}
        width={500}
      />
      <Button buttonStyle='btnPrimary'>Add to wish list</Button>
    </div>
      <div className={Styles.productInfo}>
        <h2 className={Styles.productName}>{product.name}</h2>
        <p className={Styles.productShortDescription}>{product.description}</p>
        <div className={Styles.priceWrapper}>
          <span className={Styles.price}>{product.currencie}{product.price}</span>
          <span className={Styles.actualPrice}>{product.currencie}{product.recommendedPrice}</span>
        </div>
      </div>
  </div>
  )
}

export default ProductCard;
