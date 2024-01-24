import Image from "next/image";
import Link from "next/link";
import ContentfulImage from "./ui/ContentfullImage";

const PostCard = ({ post }) => {
  const { title, type, video, images, slug, mainImage } = post.fields;

  return (
    <div className="w-[calc(50%-16px)] mx-2 md:mx-5 md:w-[calc(33.3%-40px)] transition-all rounded-tr-[20px] rounded-bl-[20px] overflow-hidden ease-in-out duration-300 aspect-video mb-5 md:mb-10 lg:mb-12 shadow-work-outline translate-y-0 hover:-translate-y-0.5 hover:shadow-work-outline-hover">
      <Link href={`/work/film/${slug}`} aria-label={title}>
        {/* <h1>{title}</h1> */}
        {/* <p>{type}</p> */}
        {/* <iframe
          src={`${video}?autoplay=0&showinfo=0&controls=0`}
          frameborder="0"
        ></iframe> */}
        <div>
          <ContentfulImage
            alt={`Cover Image for ${title}`}
            src={mainImage.fields.file.url}
            className="object-cover w-full h-full aspect-video"
            width={mainImage.fields.file.details.image.width}
            height={mainImage.fields.file.details.image.height}
          />
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
