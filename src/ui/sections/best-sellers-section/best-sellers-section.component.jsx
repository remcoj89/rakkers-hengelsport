import HorizontalProductCarousel from '@/ui/compontents/horizontal-product-carousel/horizontal-product-carousel.component';


const BestSellersSection = ({products}) => {
  return (
    <section id="bestSellerSection">
      <HorizontalProductCarousel sectionTitle="Best Sellers" products={products} />
    </section>
  )
}

export default BestSellersSection;
