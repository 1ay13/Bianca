import Image from "next/image";
import Link from "next/link";
import ContentfulImage from "./ui/ContentfullImage";

const PostCard = ({ post }) => {
  const { title, type, video, images, slug, mainImage } = post.fields;

  return (
    <li className="rounded-md overflow-hidden shadow-md my-5">
      <Link href={`/posts/${slug}`} aria-label={title}>
        {/* <h1>{title}</h1> */}
        {/* <p>{type}</p> */}
        {/* <iframe
          src={`${video}?autoplay=0&showinfo=0&controls=0`}
          frameborder="0"
        ></iframe> */}

        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={mainImage.fields.file.url}
          width={mainImage.fields.file.details.image.width}
          height={mainImage.fields.file.details.image.height}
        />
      </Link>
    </li>
  );
};

export default PostCard;
