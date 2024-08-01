// Data
import { staticProducts, staticBlogPosts } from "@/utils/data";

// Sections
import BannerSection from "@/ui/sections/banner-section/banner-section.component";
import HeroSection from "@/ui/sections/hero-section/hero-section.component";
import TopBlogPostsSection from "@/ui/sections/top-blog-posts-section/top-blog-posts-section.component";
import BestSellersSection from "@/ui/sections/best-sellers-section/best-sellers-section.component";

// Inspiration https://themes.shopify.com/themes/impact/styles/sound/preview
export default function Home() {

  return (
    <main>
      <HeroSection />
      {/* Best Sellers */}
      <BestSellersSection products={staticProducts} />
      {/* Banner */}
      <BannerSection />
      <TopBlogPostsSection blogPosts={staticBlogPosts} />
      {/* Shop by catergory */}
      {/* CTA Scecion  */}
      {/* Catergory grid section */}
      {/* CTA for 1 product */}
      {/* Banner for 1 product */}
    </main>
  );
}
