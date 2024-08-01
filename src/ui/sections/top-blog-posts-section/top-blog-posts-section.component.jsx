import HorizontalPostsCarousel from "@/ui/compontents/horizontal-posts-carousel/horizontal-posts-carousel.component";

const TopBlogPostsSection = ({blogPosts}) => {
  return (
    <section id='top-blog-posts-section'>
      <HorizontalPostsCarousel sectionTitle="Top blog posts" blogPosts={blogPosts} />
    </section>
  )
}

export default TopBlogPostsSection;
