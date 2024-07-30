import BannerSection from "@/ui/sections/banner-section/banner-section.component";
import BestSellersSection from "@/ui/sections/best-sellers-section/best-sellers-section.component";
import HeroSection from "@/ui/sections/hero-section/hero-section.component";

// Inspiration https://themes.shopify.com/themes/impact/styles/sound/preview
export default function Home() {

  const staticProducts = [
    {
      id: 1,
      name: "product-1",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
    {
      id: 2,
      name: "product-2",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
    {
      id: 3,
      name: "product-3",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
    {
      id: 4,
      name: "product-4",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
    {
      id: 5,
      name: "product-5",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
    {
      id: 6,
      name: "product-6",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
    {
      id: 7,
      name: "product-7",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
    {
      id: 8,
      name: "product-8",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
    {
      id: 9,
      name: "product-9",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
    {
      id: 10,
      name: "product-10",
      href: "#",
      price: "$499",
      description: "Verkrijgbaar in 3 kleuren",
      imageSrc: "https://plus.unsplash.com/premium_photo-1661508763045-3077c515b94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Product image"
    },
  ]

  const bestSellers = staticProducts.slice(0, 6)

  return (
    <main>
      <HeroSection />
      <BestSellersSection bestSellers={bestSellers} />
      {/* Banner */}
      <BannerSection />
      {/* Top blog posts */}
      {/* Shop by catergory */}
      {/* CTA Scecion  */}
      {/* Catergory grid section */}
      {/* CTA for 1 product */}
      {/* Banner for 1 product */}
    </main>
  );
}
