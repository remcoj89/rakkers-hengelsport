import Styles from './banner-section.module.css';

const BannerSection = () => {
  return (
    <section className={Styles.banner}>
      <div className="wrapper">
        <div className={Styles.bannerContent}>
          <h3>&quot;Most of the world is covered by water. A fisherman&rsquo;s job is simple: pick out the best parts&quot; (Charles Waterman)</h3>
        </div>
      </div>
    </section>
  )
}

export default BannerSection;
