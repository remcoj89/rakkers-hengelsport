import Styles from './blog-card.module.css';

import Image from 'next/image';

const BlogCard = ({post}) => {
  const {imgUrl, altText, title, article} = post
  return (
    <div className={Styles.mediaElement}>
      <Image src={imgUrl} alt={altText} width={500} height={500}/>
      <h3>{title}</h3>
      <p>{article}</p>
    </div>
  )
}

export default BlogCard;
