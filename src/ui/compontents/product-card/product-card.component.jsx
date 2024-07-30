import Styles from './product-card.module.css';
import Image from 'next/image'
import Button from '../button/button.component'

const ProductCard = ({product}) => {
  return (
    <div className={Styles.productCard}>
      <Image src={product.imageSrc} width={500} height={500} alt={product.imageAlt} />
      <div className={Styles.cardText}>
        <div className={Styles.cardContent}>
          <div >
            <h3>{product.name}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione ullam voluptas quis dignissimos officiis aliquam! Earum totam vero </p>
          </div>
        </div>
        <div className={Styles.butt}>
          <Button buttonStyle='btnSecondary'>Voeg toe aan winkelwagen</Button>
          <Button buttonStyle='btnPrimary'>Bekijk product</Button>
        </div>
      </div>
        <span className={Styles.productPrice}>{product.price}</span>
    </div>
  )
}

export default ProductCard;
